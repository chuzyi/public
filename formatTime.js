/*时间戳转时间 */
/**
 *使用 this.$toTime({
   date:date,
   type:type,
   state:true,(为true是中文显示 ps： 2012年12月12日 12：12：12)
 })
 * @param {时间戳} date
 * @param {是否只要年月日} type
 * @param {时间连接符(Y:年)(M:月)(D:日)} state
 */
export function timestampToTime(obj) {
  let T = "",
  date1 = (obj.date+'').length==10?parseInt(obj.date) * 1000:parseInt(obj.date),
  type = obj.type || false,
  CY =obj.state?"年":"-",
  CM=obj.state?"月":"-",
  CD=obj.state?"日":" ";
  var date = new Date(date1),
  Y = date.getFullYear() + CY,
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + CM,
  D = (date.getDate()<10?('0' +date.getDate()):date.getDate()) +CD+" ",
  h = (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':',
  m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':',
  s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds() ;
  T = type ? Y + M + D : Y + M + D + h + m + s;
  return T;
}
/*标准时间转时间戳 */
export function timetoTimestamp(date) {
  return Date.parse(formatDate0(date)) / 1000
}
/*element时间戳转时间 (常用在修改)*/
export function eleTimestampToTime(date) {
  let that = this;
  let time = date;
  function T(i, n) {
    n = n || 0;
    return parseInt(that.$formatDate(time, "yyyy:MM:dd:hh:mm:ss").split(":")[i] - n)
  }
  return new Date(T(0), T(1, 1), T(2), T(3), T(4), T(5));
};

