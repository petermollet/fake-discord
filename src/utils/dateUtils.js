import { format, isToday, isYesterday } from 'date-fns';

export default class DateUtils {
    static formatToYearMonthDay(date) {
        const dateObj = date instanceof Date ? date : new Date(date);
        return format(dateObj, 'yyyy-MM-dd');
    }
    static formatToDay(date) {
        const dateObj = date instanceof Date ? date : new Date(date);
        return format(dateObj, 'LLLL dd, yyyy');
    }
    static formatToTime(date) {
        const dateObj = date instanceof Date ? date : new Date(date);
        const isdateToday = isToday(dateObj);
        const isdateYesterday = isYesterday(dateObj);
        if (isdateToday || isdateYesterday) {
            return `${isdateToday ? 'Today' : 'Yesterday'} at ${format(
                dateObj,
                'hh:mm b',
            )}`;
        }
        return format(dateObj, 'dd/MM/yyyy');
    }
}
