import { makeAutoObservable, runInAction } from 'mobx';
import { DataItemProps } from '../components/ListItem/interfaces';
import { safeNewDate } from '../helper/Format';
import { getTransaction } from '../services/transaction';

// State Management For Transaction
// Utilize Significant Performance on Re-render using observable and action
class TransactionStore {
  // Data for default data, it's a default state without sort and filter
  data: Array<DataItemProps> = [];

  // Filtered Data is used for sorted data and filtered data using slice from data,
  filteredData: Array<DataItemProps> = [];

  // For loading purpose when get Data from API
  isLoading = false;

  // make auto observable for this store
  constructor() {
    makeAutoObservable(this);
  }

  // Get list from transaction service using async for better readabilty
  async getList() {
    this.isLoading = true;
    try {
      const response = await getTransaction();
      runInAction(() => {
        this.data = response;
        this.filteredData = response;
      });
    } catch (e) {
      //
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  doSearch(keyword: string) {
    // this function will decrease a little bit performance, if want to speed up
    // Better use filter on API it will increase performance on mobile significanly, 
    // because device only weighted by network, not by device resource
    // Big O Notation will happen if data > 100
    // https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
    const normalizeKeyword = keyword.toLowerCase();

    const search = (obj: DataItemProps) => {
      // destructuring and set variable for better readibility
      const { sender_bank, beneficiary_bank, beneficiary_name, amount } = obj;
      const normalizeSenderBank = sender_bank?.toLowerCase();
      const normalizeBeneficiaryName = beneficiary_name?.toLowerCase();
      const normalizeBeneficiaryBank = beneficiary_bank?.toLowerCase();

      // return true or false with some condition
      return (
        normalizeSenderBank?.includes(normalizeKeyword)
        || normalizeBeneficiaryName?.includes(normalizeKeyword)
        || normalizeBeneficiaryBank?.includes(normalizeKeyword)
        || amount?.toString().includes(normalizeKeyword)
      );
    };

    // return filtered item as keyword
    runInAction(() => {
      this.filteredData = this.data.filter((obj) => search(obj));
    });
  }


  doSort(sortBy: string) {
    // All of this function will decrease a little bit performance, if want to speed up
    // Better use sorting on API, as stated on above, Big O Notation will happen if data > 100
    // https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
    runInAction(() => {
      if (sortBy === 'A-Z') {
        this.filteredData = this.data.slice().sort((a, b) => (a.beneficiary_name || '').localeCompare((b.beneficiary_name) || ''));
        return;
      }

      if (sortBy === 'Z-A') {
        this.filteredData = this.data.slice().sort((a, b) => (b.beneficiary_name || '').localeCompare((a.beneficiary_name) || ''));
        return;
      }

      if (sortBy === 'TERBARU') {
        this.filteredData = this.data.slice().sort((a, b) => safeNewDate(b.created_at).getTime() - safeNewDate(a.created_at).getTime());
        return;
      }

      if (sortBy === 'TERLAMA') {
        this.filteredData = this.data.slice().sort((a, b) => safeNewDate(a.created_at).getTime() - safeNewDate(b.created_at).getTime());
        return;
      }

      this.filteredData = this.data;
    });
  }
}

export const transactionStore = new TransactionStore();
