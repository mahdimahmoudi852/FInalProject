function myFunc() {
  var x = document.getElementById("sidebar");
  if (x.className === "sidebar") {
    x.className += " sidebar-menu";
  } else {
    x.className = "sidebar";
  }
}
// to-top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})
function timer(){

  var countDownDate = new Date("feb 15, 2022 21:00:00").getTime();

  var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      
  document.getElementById("days").innerHTML = days + "روز-";
  document.getElementById("hours").innerHTML = hours + "ساعت-"; 
  document.getElementById("mins").innerHTML = minutes + "دقیقه-"; 
  document.getElementById("secs").innerHTML = seconds + "ثانیه" ;
      
  if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = "" 
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "جشنواره شروغع شده!!";
  }
  }, 1000);
  }   