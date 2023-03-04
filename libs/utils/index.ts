import { ACTIVATE_STATUS } from '@enums/index';
import { useTheme } from '@mui/material';
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

export const capitalizeFirstLetter = (text: string) => {
  return text?.charAt(0).toUpperCase() + text?.slice(1)
}

export const handleStatus = (status: number) => {
  const theme = useTheme()

  if (status === ACTIVATE_STATUS.ONLINE) return theme.palette.green.main
  if (status === ACTIVATE_STATUS.OFFLINE) return theme.palette.lightGrey.main
  if (status === ACTIVATE_STATUS.AWAY) return theme.palette.yellow.main
  return theme.palette.red.main
}