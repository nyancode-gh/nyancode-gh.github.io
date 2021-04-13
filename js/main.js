//日付
document.getElementById('viewToday').innerHTML = today();
function today() {
  now = new Date();
  year = now.getFullYear();
  mon = now.getMonth()+1;
  date = now.getDate();
  return `${year}年${mon}月${date}日`; 
}