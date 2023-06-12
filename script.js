const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavlist = navList.length;
    for(let i=0; i<totalNavlist; i++){
        console.log(navList[i])
    }

$(document).ready(function () {
  console.log("yes");

  $(window).scroll(function() {
    const html = document.querySelector('html');
    window.onscroll = () => {
      if (window.scrollY > 500) {
        html.classList.add('scrolled1');
        } else {
        html.classList.remove('scrolled1');
      }
      
      if (window.scrollY > 1500) {
        html.classList.add('scrolled2');
      } else {
        html.classList.remove('scrolled2');
      }

      if (window.scrollY > 3000) {
        html.classList.add('scrolled3');
      } else {
        html.classList.remove('scrolled3');
      }
    };
  });
});
