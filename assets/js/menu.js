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

const windowUpto600 = function () {
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
      menu_items[i].style.display = 'block';
      setTimeout(() => {
        menu_items[i].style.opacity = '1';
        menu_items[i].style.transform = 'translateY(0)';
        console.log('checked');
      }, 300 + i * 75);
    }
  }

  function hideMenuItems() {
    for (let i = 0; i < menu_items.length; i++) {
      menu_items[i].style.transform = 'translateY(5rem)';
      menu_items[i].style.opacity = '0';
      menu_items[i].s;
      console.log('unchecked');
    }
  }

  for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', function (e) {
      hideMenuItems();
      console.log('clicked submenu');
      const sub_menu_items = document.querySelectorAll('.headernav__sub--l2');
      for (let i = 0; i < sub_menu_items.length; i++) {
        console.log(sub_menu_items[i]);
        sub_menu_items[i].style.display = 'block';
        sub_menu_items[i].style.opacity = '1';
      }
    });
  }
};

// SCREENSIZE HANDLING
window.addEventListener('resize', resizeHandler);
let screenSize = window.innerWidth;

function resizeHandler() {
  if (screenSize < 1040) {
    windowUpto600();
  }
}

(function init() {
  resizeHandler();
})();
