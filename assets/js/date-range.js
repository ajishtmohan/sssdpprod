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
  const date_picker = document.getElementById('date_picker');
  const submit = document.getElementById('submit');

  datepick.addEventListener('click', function () {
    date_picker.style.display = 'block';
    datepick.style.display = 'none';
  });

  submit.addEventListener('click', function (e) {
    e.preventDefault();
    date_picker.style.display = 'none';
    datepick.style.display = 'inline-block';
  });
});
