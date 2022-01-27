const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
// 格式化utc时间
export function formateUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
