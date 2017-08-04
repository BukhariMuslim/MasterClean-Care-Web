const GetFormattedDate = (date, withTime) => {
  let dt = new Date(date)
  let mm = dt.getMonth() + 1;
  let dd = dt.getDate();

  if (withTime) {
    let hh = dt.getHours();
    let mt = dt.getMinutes();
    let ss = dt.getSeconds();
    
    const formattedDate = [
      (dd > 9 ? '' : '0') + dd,
      (mm > 9 ? '' : '0') + mm,
      dt.getFullYear()
    ].join('/')
    const formattedTime = [
      (hh > 9 ? '' : '0') + hh,
      (mt > 9 ? '' : '0') + mt,
      (ss > 9 ? '' : '0') + ss,
    ].join(':')
    
    return [formattedDate, formattedTime].join(' ')
  }

  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    dt.getFullYear()
  ].join('/')
}

export default GetFormattedDate