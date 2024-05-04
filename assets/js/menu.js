$(document).ready(function () {
  window.addEventListener('pageshow', function (event) {
    var historyTraversal =
      event.persisted ||
      (typeof window.performance != 'undefined' &&
        window.performance.navigation.type === 2);
    if (historyTraversal) {
      // Handle page restore.
      window.location.reload();
    }
  });

  let section = document.getElementsByClassName('section-home');
  for (let i = 0; i < section.length; i++) {
    setTimeout(function () {
      section[i].style.opacity = 1;
    }, 200);
  }

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
      document.querySelector('main').style.transform = 'translateY(-6.01rem)';
    }
    prevScrollpos = currentScrollPos;
  };

  const windowUpto600 = function () {
    const nav_toggle = document.querySelector('#nav-toggle');
    const menu_items = document.querySelectorAll('.headernav__item');
    hideMenuItems(menu_items);

    nav_toggle.addEventListener('click', function () {
      if (nav_toggle.checked === true) {
        showMenuItems(menu_items);
      } else if (nav_toggle.checked === false) {
        hideMenuItems(menu_items);
        hideMenuItems(acs_menu_items);
      }
    });

    function showMenuItems(item) {
      for (let i = 0; i < item.length; i++) {
        item[i].style.display = 'block';
        setTimeout(() => {
          item[i].style.opacity = '1';
          item[i].style.transform = 'translateY(0)';
        }, 300 + i * 75);
        console.log(item[i].style.opacity);
      }
    }

    function hideMenuItems(item) {
      for (let i = 0; i < item.length; i++) {
        item[i].style.transform = 'translateY(5rem)';
        item[i].style.opacity = '0';
        item[i].style.display = 'none';
      }
    }

    const acs_menu = document.getElementById('acs');
    const acs_sub = document.getElementById('acs_sub');
    const acs_menu_items = document.getElementsByClassName('acs');

    acs_menu.addEventListener('click', function () {
      hideMenuItems(menu_items);
      acs_sub.style.display = 'flex';
      acs_sub.style.opacity = '1';

      for (let i = 0; i < acs_menu_items.length; i++) {
        acs_sub.append(acs_menu_items[i]);
      }
    });
  };

  // SCREENSIZE HANDLING
  window.addEventListener('resize', resizeHandler);
  let screenSize = window.innerWidth;

  function resizeHandler() {
    if (screenSize < 900) {
      windowUpto600();
    }
  }

  (function init() {
    resizeHandler();
  })();
});
