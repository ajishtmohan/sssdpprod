$(document).ready(function () {
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let newDate;

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  updateDate();

  function updateDate() {
    $('#date').html(date);
    $('#month').html(months[month]);
    $('#year').html(year);
  }

  const datepick = document.getElementById('datepick');
  const datepicklab = document.getElementById('datepicklab');

  function hideDatePicker() {
    datepick.style.display = 'none';
    datepicklab.style.display = 'block';
  }

  datepicklab.addEventListener('click', function () {
    datepick.style.display = 'block';
    datepicklab.style.display = 'none';
  });

  datepick.onchange = function () {
    newDate = document.getElementById('datepick').value;
    const newDateArray = newDate.split('-');
    year = Number(newDateArray[0]);
    month = Number(newDateArray[1] - 1);
    date = Number(newDateArray[2]);
    updateDate();
    hideDatePicker();
  };
});
