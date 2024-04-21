'use strict';

// HOME PAGE PHOTOS
const homepagephoto = document.getElementsByClassName('homepagephoto');

for (let i = 0; i < homepagephoto.length; i++) {
  setTimeout(() => {
    homepagephoto[i].style.opacity = 1;
    homepagephoto[i].style.transform = 'translateY(0rem)';
  }, 300 * (i + 1));
}

// IN VIEW FUNCTIONS

function isInFullView(element) {
  let bounding = element.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  } else {
    return false;
  }
}

function isTopInView(element, pos = 0.8) {
  let bounding = element.getBoundingClientRect();

  if (bounding.top <= window.innerHeight * pos) {
    return true;
  } else {
    return false;
  }
}

// LATEST NEWS
const latest_news = document.getElementById('latest_news');

if (latest_news !== null) {
  const latest_news = document.getElementById('latest_news');
  const latest_news_h2 = document.getElementById('latest_news_h2');
  const latest_news_item = document.getElementById('latest_news_item');
  const latest_news_el = [latest_news, latest_news_h2, latest_news_item];

  for (let i = 0; i < latest_news_el.length; i++) {
    latest_news_el[i].style.opacity = '0';
    latest_news_el[i].style.transform = 'translateY(5rem)';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isTopInView(latest_news, 0.9)) {
        for (let i = 0; i < latest_news_el.length; i++) {
          setInterval(() => {
            latest_news_el[i].style.opacity = 1;
            latest_news_el[i].style.transform = 'translateY(0rem)';
          }, 300 * i + 300);
        }
      }
    },
    false
  );
}

// VISION BLOCK
const vision_block = document.getElementById('vision_block');

if (vision_block !== null) {
  const vision_block_items =
    document.getElementsByClassName('vision-block__item');

  for (let i = 0; i < vision_block_items.length; i++) {
    vision_block_items[i].style.opacity = 0;
    i === 0
      ? (vision_block_items[i].style.transform = 'translateX(-5rem)')
      : (vision_block_items[i].style.transform = 'translateX(5rem)');
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isInFullView(vision_block)) {
        for (let i = 0; i < vision_block_items.length; i++) {
          setInterval(() => {
            vision_block_items[i].style.opacity = 1;
            vision_block_items[i].style.transform = 'translateX(0rem)';
          }, 500);
        }
      }
    },
    false
  );
}

// MISSION BLOCK
const mission_block = document.getElementById('mission_block');

if (mission_block !== null) {
  const mission_block_items = document.getElementsByClassName(
    'mission-block__item'
  );

  for (let i = 0; i < mission_block_items.length; i++) {
    mission_block_items[i].style.opacity = 0;
    i === 0
      ? (mission_block_items[i].style.transform = 'translateX(-5rem)')
      : (mission_block_items[i].style.transform = 'translateX(5rem)');
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isInFullView(mission_block)) {
        for (let i = 0; i < mission_block_items.length; i++) {
          setInterval(() => {
            mission_block_items[i].style.opacity = 1;
            mission_block_items[i].style.transform = 'translateX(0rem)';
          }, 500);
        }
      }
    },
    false
  );
}

//  CONFERENCE
const police_conf = document.getElementById('police_conf');

if (police_conf !== null) {
  const police_conf = document.getElementById('police_conf');
  const police_conf_img = document.getElementById('police_conf_img');
  const police_conf_text = document.getElementById('police_conf_text');
  const police_conf_el = [police_conf, police_conf_img, police_conf_text];

  for (let i = 0; i < police_conf_el.length; i++) {
    police_conf_el[i].style.opacity = '0';
    police_conf_el[i].style.transform = 'translateY(5rem)';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isTopInView(police_conf, 0.9)) {
        for (let i = 0; i < police_conf_el.length; i++) {
          setInterval(() => {
            police_conf_el[i].style.opacity = 1;
            police_conf_el[i].style.transform = 'translateY(0rem)';
          }, 300 * i + 300);
        }
      }
    },
    false
  );
}

// POLICE COMMEMORATION
const police_comm = document.getElementById('police_comm');

if (police_comm !== null) {
  const police_comm_img = document.getElementById('police_comm_img');
  const police_comm_h2 = document.getElementById('police_comm_h2');
  const police_comm_p = document.getElementById('police_comm_p');
  const police_comm_el = [police_comm_img, police_comm_h2, police_comm_p];

  for (let i = 0; i < police_comm_el.length; i++) {
    police_comm_el[i].style.opacity = '0';
    police_comm_el[i].style.transform = 'translateY(5rem)';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isTopInView(police_comm, 0.9)) {
        for (let i = 0; i < police_comm_el.length; i++) {
          setInterval(() => {
            police_comm_el[i].style.opacity = 1;
            police_comm_el[i].style.transform = 'translateY(0rem)';
          }, 300 * i + 300);
        }
      }
    },
    false
  );
}

// SM BLOCK
const sm_block_cont = document.getElementById('sm_block_cont');

if (sm_block_cont !== null) {
  const sm_block_h2 = document.getElementById('sm_block_h2');
  const sm_block = document.getElementById('sm_block');
  const sm_block_el = [sm_block_cont, sm_block_h2, sm_block];

  for (let i = 0; i < sm_block_el.length; i++) {
    sm_block_el[i].style.opacity = '0';
    sm_block_el[i].style.transform = 'translateY(5rem)';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isTopInView(sm_block_cont, 0.9)) {
        for (let i = 0; i < sm_block_el.length; i++) {
          setInterval(() => {
            sm_block_el[i].style.opacity = 1;
            sm_block_el[i].style.transform = 'translateY(0rem)';
          }, 500 * i + 500);
        }
      }
    },
    false
  );
}
