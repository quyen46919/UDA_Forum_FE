import moment from 'moment';

export const formatDate = (date: string) => {
  return moment(date).format('L');
};

export const formatPriceToVND = (price: number) => {
  return price.toLocaleString('en-US', {
    style: 'decimal',
    useGrouping: true,
  }) + ' VND'
}