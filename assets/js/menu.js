let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    // Show standard menu
    document.querySelector('.header').style.top = '0';
    document.querySelector('main').style.transform = 'translateY(0)';
  } else {
    // Show minimal menu
    document.querySelector('.header').style.top = '-13.61rem';
    document.querySelector('main').style.transform = 'translateY(-9.21rem)';
  }
  prevScrollpos = currentScrollPos;
};
