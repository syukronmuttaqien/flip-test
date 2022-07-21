export const formatCurrency = (nominal: any, currency = 'Rp', separator = '.') => {
  if (isNaN(nominal)) {
    nominal = '';
  }

  if (nominal || nominal === '' || nominal === 0) {
    return currency + nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  return '';
};

export const safeNewDate = (localDateTimeStr: any) => {

  var match = localDateTimeStr.match(
    /(\d{4})-(\d{2})-(\d{2})[\sT](\d{2}):(\d{2}):(\d{2})(.(\d+))?/,
  );

  if (!match) { throw new Error('Invalid format.'); }

  var [, year, month, date, hours, minutes, seconds, , millseconds] = match;

  return new Date(
    year,
    Number(month) - 1,
    date,
    hours,
    minutes,
    seconds,
    millseconds || 0,
  );
};

export function indonesianDate(date: any) {
  const safeDate = safeNewDate(date);
  const newDate = new Date(safeDate);

  let tahun = newDate.getFullYear();
  let tanggal = newDate.getDate();
  const bulanNumber = newDate.getMonth();
  let bulan = '';
  switch (bulanNumber) {
    case 0:
      bulan = 'Januari';
      break;
    case 1:
      bulan = 'Februari';
      break;
    case 2:
      bulan = 'Maret';
      break;
    case 3:
      bulan = 'April';
      break;
    case 4:
      bulan = 'Mei';
      break;
    case 5:
      bulan = 'Juni';
      break;
    case 6:
      bulan = 'Juli';
      break;
    case 7:
      bulan = 'Agustus';
      break;
    case 8:
      bulan = 'September';
      break;
    case 9:
      bulan = 'Oktober';
      break;
    case 10:
      bulan = 'November';
      break;
    case 11:
      bulan = 'Desember';
      break;
  }

  return `${tanggal} ${bulan} ${tahun}`;
}
