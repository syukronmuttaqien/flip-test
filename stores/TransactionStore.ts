import { makeAutoObservable, runInAction } from 'mobx';
import { DataItemProps } from '../components/ListItem/interfaces';
import { formatCurrency, safeNewDate } from '../helper/Format';
import { getTransaction } from '../services/transaction';

// State Management For Transaction
// Utilize Significant Performance on Re-render using observable and action
class TransactionStore {
  // Data for default data, it's a default state without sort and filter
  data: Array<DataItemProps> = [];

  // Data selected for show on detail transaction
  selected: DataItemProps = {};

  // Filtered Data is used for sorted data and filtered data using slice from data,
  filteredData: Array<DataItemProps> = [];

  // For loading purpose when get Data from API
  isLoading = false;

  // keyword for search/filtering data
  keyword = '';

  // for sorting purpose
  sortBy = 'URUTKAN';

  // make auto observable for this store
  constructor() {
    makeAutoObservable(this);
  }

  // Set Selected item so i can rendered on Transaction Detail Screen
  setSelected(data: DataItemProps) {
    runInAction(() => {
      this.selected = data;
    });
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
    // this filter function will decrease a little bit performance, if want to speed up
    // Better use filter on API it will increase performance on mobile significanly,
    // because device only weighted by network, not by device resource
    // Big O Notation will happen if data > 100
    // Disclaimer: everything has pros and cons :)
    // https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
    const normalizeKeyword = keyword.toLowerCase();

    const search = (obj: DataItemProps) => {
      // destructuring and set variable for better readibility
      const { sender_bank, beneficiary_bank, beneficiary_name, amount } = obj;
      const normalizeSenderBank = sender_bank?.toLowerCase();
      const normalizeBeneficiaryName = beneficiary_name?.toLowerCase();
      const normalizeBeneficiaryBank = beneficiary_bank?.toLowerCase();
      const currency = formatCurrency(amount);

      // return true or false with some condition
      return (
        normalizeSenderBank?.includes(normalizeKeyword) ||
        normalizeBeneficiaryName?.includes(normalizeKeyword) ||
        normalizeBeneficiaryBank?.includes(normalizeKeyword) ||
        currency.includes(normalizeKeyword) ||
        amount?.toString().includes(normalizeKeyword)
      );
    };

    // return filtered item as keyword
    runInAction(() => {
      this.keyword = keyword;
      this.filteredData = this.data.filter(obj => search(obj));
      if (this.sortBy !== 'URUTKAN') {
        this.doSort(this.sortBy);
      }
    });
  }

  doSort(sortBy: string) {
    // this sort function will decrease a little bit performance, if want to speed up
    // Better use sorting on API, as stated on above, Big O Notation will happen if data > 100
    // https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
    runInAction(() => {
      this.sortBy = sortBy;

      if (sortBy === 'Nama A-Z') {
        this.filteredData = this.filteredData
          .slice()
          .sort((a, b) =>
            (a.beneficiary_name || '').localeCompare(b.beneficiary_name || ''),
          );
        return;
      }

      if (sortBy === 'Nama Z-A') {
        this.filteredData = this.filteredData
          .slice()
          .sort((a, b) =>
            (b.beneficiary_name || '').localeCompare(a.beneficiary_name || ''),
          );
        return;
      }

      if (sortBy === 'Tanggal Terbaru') {
        this.filteredData = this.filteredData
          .slice()
          .sort(
            (a, b) =>
              safeNewDate(b.created_at).getTime() -
              safeNewDate(a.created_at).getTime(),
          );
        return;
      }

      if (sortBy === 'Tanggal Terlama') {
        this.filteredData = this.filteredData
          .slice()
          .sort(
            (a, b) =>
              safeNewDate(a.created_at).getTime() -
              safeNewDate(b.created_at).getTime(),
          );
        return;
      }

      if (this.keyword === '') {
        this.filteredData = this.data;
      }
    });
  }
}

export const transactionStore = new TransactionStore();
