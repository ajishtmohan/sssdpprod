// Updating totals
$(document).ready(function () {
  document.getElementById('pop_total').value = 0;
  console.log('hu');
});

// // Update menu items in the form
// $(document).ready(function () {
//   $('#v_form_constituency').change(function () {
//     const asmb_id = $('#v_form_constituency').val();
//     $.ajax({
//       url: 'data_village.php',
//       method: 'post',
//       data: {
//         action: 'village_form',
//         asmb_id: asmb_id,
//       },
//     }).done(function (circles) {
//       circles = JSON.parse(circles);

//       circles.sort((a, b) => {
//         let fa = a.circle_name.toLowerCase();
//         let fb = b.circle_name.toLowerCase();
//         if (fa < fb) {
//           return -1;
//         }
//         if (fa > fb) {
//           return 1;
//         }
//         return 0;
//       });

//       // circles.forEach(function (x) {
//       //   console.log(x.circle_name);
//       // });
//       // console.log('----- END OF CIRCLES -----');

//       $('input[type=text].v_asmb_number').empty();
//       const asmb_num = [155, 156, 157, 158, 159, 160, 161];
//       $('#v_asmb_number').val(asmb_num[asmb_id - 1]);

//       $('#v_form_circle').empty();
//       $('#v_form_circle').append(
//         '<option disabled default selected value="">~ select circle ~</option>'
//       );
//       $('#v_form_mandala').empty();
//       $('#v_form_mandala').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       $('#v_form_police').empty();
//       $('#v_form_police').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       $('#v_form_village_name').empty();
//       $('#v_form_village_name').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       circles.forEach(function (circle) {
//         $('#v_form_circle').append(
//           '<option class="boothform__option" id="' +
//             circle.circle_id +
//             '" value="' +
//             circle.circle_id +
//             '">' +
//             circle.circle_name +
//             '</option>'
//         );
//       });
//     });
//   });

//   $('#v_form_circle').change(function () {
//     let circle_id = $('#v_form_circle').val();
//     $.ajax({
//       url: 'data_village.php',
//       method: 'post',
//       data: {
//         action: 'village_form',
//         circle_id: circle_id,
//       },
//     }).done(function (mandalas) {
//       mandalas = JSON.parse(mandalas);
//       mandalas.sort((a, b) => {
//         let fa = a.mandala_name.toLowerCase();
//         let fb = b.mandala_name.toLowerCase();
//         if (fa < fb) {
//           return -1;
//         }
//         if (fa > fb) {
//           return 1;
//         }
//         return 0;
//       });
//       // mandalas.forEach(function (x) {
//       //   console.log(x.mandala_name);
//       // });
//       // console.log(`--- End of Mandalas ---`);
//       $('#v_form_mandala').empty();
//       $('#v_form_mandala').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       $('#v_form_police').empty();
//       $('#v_form_police').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       $('#v_form_village_name').empty();
//       $('#v_form_village_name').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       mandalas.forEach(function (mandala) {
//         $('#v_form_mandala').append(
//           '<option class="boothform__option" id="' +
//             mandala.mandala_id +
//             '" value="' +
//             mandala.mandala_id +
//             '">' +
//             mandala.mandala_name +
//             '</option>'
//         );
//       });
//     });
//   });
//   // MANDALA MANDALA MANDALA MANDALA MANDALA
//   $('#v_form_mandala').change(function () {
//     let mandala_id = $('#v_form_mandala').val();
//     $.ajax({
//       url: 'data_village.php',
//       method: 'post',
//       data: {
//         action: 'village_form',
//         mandala_id: mandala_id,
//       },
//     }).done(function (policestns) {
//       policestns = JSON.parse(policestns);
//       policestns.sort((a, b) => {
//         let fa = a.police_name.toLowerCase();
//         let fb = b.police_name.toLowerCase();
//         if (fa < fb) {
//           return -1;
//         }
//         if (fa > fb) {
//           return 1;
//         }
//         return 0;
//       });
//       // policestns.forEach(function (x) {
//       //   console.log(x.police_name);
//       // });
//       // console.log(`--- End of Police Stations ---`);
//       $('#v_form_police').empty();
//       $('#v_form_police').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       $('#v_form_village_name').empty();
//       $('#v_form_village_name').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       policestns.forEach(function (policestn) {
//         $('#v_form_police').append(
//           '<option class="boothform__option" id="' +
//             policestn.police_id +
//             '" value="' +
//             policestn.police_id +
//             '">' +
//             policestn.police_name +
//             '</option>'
//         );
//       });
//     });
//   });

//   $('#v_form_police').change(function () {
//     let police_id = $('#v_form_police').val();
//     $.ajax({
//       url: 'data_village.php',
//       method: 'post',
//       data: {
//         action: 'village_form',
//         police_id: police_id,
//       },
//     }).done(function (villages) {
//       villages = JSON.parse(villages);
//       villages.sort((a, b) => {
//         let fa = a.village_name.toLowerCase();
//         let fb = b.village_name.toLowerCase();
//         if (fa < fb) {
//           return -1;
//         }
//         if (fa > fb) {
//           return 1;
//         }
//         return 0;
//       });
//       // villages.forEach(function (x) {
//       //   console.log(x.village_name);
//       // });
//       // console.log(`--- End of Police Stations ---`);
//       $('#v_form_village_name').empty();
//       $('#v_form_village_name').append(
//         '<option disabled default selected class="boothform__option" value="">~ select mandala ~</option>'
//       );
//       villages.forEach(function (villages) {
//         $('#v_form_village_name').append(
//           '<option class="boothform__option" id="' +
//             villages.village_id +
//             '" value="' +
//             villages.village_id +
//             '">' +
//             villages.village_name +
//             '</option>'
//         );
//       });
//     });
//   });

//   $('#village_entry_form').submit(function (e) {
//     e.preventDefault();
//     let asmb_id = $('#v_form_constituency').val();
//     let asmb_number = $('#v_asmb_number').val();
//     let circle_id = $('#v_form_circle').val();
//     let mandala_id = $('#v_form_mandala').val();
//     let police_id = $('#v_form_police').val();
//     let village_id = $('#v_form_village_name').val();
//     let village_rank = $('#v_form_village_rank').val();
//     let village_sensitivity = $('#v_form_sensiti').val();
//     let village_predominant = [];
//     $('input[name="predominant[]"]:checked').each(function () {
//       village_predominant.push($(this).val());
//     });
//     let village_sc_male = $('#sc_pop_male').val();
//     let village_sc_female = $('#sc_pop_female').val();
//     let village_sc_trans = $('#sc_pop_trans').val();
//     let village_sc_total = $('#sc_pop_total').val();
//     let village_st_male = $('#st_pop_male').val();
//     let village_st_female = $('#st_pop_female').val();
//     let village_st_trans = $('#st_pop_trans').val();
//     let village_st_total = $('#st_pop_total').val();
//     let village_ot_male = $('#oth_pop_male').val();
//     let village_ot_female = $('#oth_pop_female').val();
//     let village_ot_trans = $('#oth_pop_trans').val();
//     let village_ot_total = $('#oth_pop_total').val();
//     let village_tot_male = $('#tot_pop_male').val();
//     let village_tot_female = $('#tot_pop_female').val();
//     let village_tot_trans = $('#tot_pop_trans').val();
//     let village_tot_total = $('#tot_pop_total').val();

//     // console.log(`--- COLLECTED DATA ---`);

//     $.ajax({
//       url: 'data_village.php',
//       method: 'post',
//       data: {
//         action: 'insert_village',
//         asmb_id: asmb_id,
//         asmb_number: asmb_number,
//         circle_id: circle_id,
//         mandala_id: mandala_id,
//         police_id: police_id,
//         village_id: village_id,
//         village_rank: village_rank,
//         village_sensitivity: village_sensitivity,
//         village_predominant: village_predominant,

//         village_sc_male: village_sc_male,
//         village_sc_female: village_sc_female,
//         village_sc_trans: village_sc_trans,
//         village_sc_total: village_sc_total,

//         village_st_male: village_st_male,
//         village_st_female: village_st_female,
//         village_st_trans: village_st_trans,
//         village_st_total: village_st_total,

//         village_ot_male: village_ot_male,
//         village_ot_female: village_ot_female,
//         village_ot_trans: village_ot_trans,
//         village_ot_total: village_ot_total,

//         village_tot_male: village_tot_male,
//         village_tot_female: village_tot_female,
//         village_tot_trans: village_tot_trans,
//         village_tot_total: village_tot_total,
//       },
//     }).done(function (data) {
//       $('.server_report').empty();
//       $('.server_report').append(data);
//     });
//   });
// });

// CASTE TABLE SELECTION FUNCTION
