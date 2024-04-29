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

const nav_toggle = document.querySelector('#nav-toggle');
const menu_items = document.querySelectorAll('.headernav__item');
console.log(menu_items.length);
hideMenuItems();

nav_toggle.addEventListener('click', function () {
  if (nav_toggle.checked === true) {
    showMenuItems();
  } else if (nav_toggle.checked === false) {
    hideMenuItems();
  }
});

function showMenuItems() {
  for (let i = 0; i < menu_items.length; i++) {
    setTimeout(() => {
      menu_items[i].style.opacity = '1';
      console.log('checked');
    }, 300 + i * 75);
  }
}

function hideMenuItems() {
  for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].style.opacity = '0';
    console.log('unchecked');
  }
}
