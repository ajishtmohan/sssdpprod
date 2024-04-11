let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    // Show standard menu
    setTimeout(function () {
      document.querySelector('.header').style.top = '0';
      document.querySelector('main').style.transform = 'translateY(0)';
    }, 300);
  } else {
    // Show minimal menu
    setTimeout(function () {
      document.querySelector('.header').style.top = '-13.61rem';
      document.querySelector('main').style.transform = 'translateY(-13.61rem)';
    }, 300);
  }
  prevScrollpos = currentScrollPos;
};
