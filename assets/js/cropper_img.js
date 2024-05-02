$(document).ready(function () {
  var $modal = document.querySelector('.modal');
  let image = document.querySelector('#pl_sample_image');
  let crop = document.querySelector('#crop');
  let pil_photo = document.querySelector('#pil_photo');
  let $image_input = document.querySelector('#upload_image');
  let cancel = document.querySelector('#cancel');
  let cropper;

  $('#upload_image').change(function (event) {
    var files = event.target.files;

    var done = function (url) {
      image.src = url;
      $modal.style.display = 'block';
      initCropper();
    };

    if (files && files.length > 0) {
      reader = new FileReader();
      reader.onload = function (event) {
        done(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    function initCropper() {
      cropper = new Cropper(image, {
        aspectRatio: 2.35 / 2.8,
        viewMode: 2,
      });
    }

    crop.addEventListener('click', function (e) {
      let croppedImg = cropper
        .getCroppedCanvas({ width: 470, height: 560 })
        .toDataURL('image/jpeg');
      pil_photo.src = croppedImg;

      $modal.style.display = 'none';
      destroyCropper();
    });

    cancel.addEventListener('click', function (e) {
      $modal.style.display = 'none';
      destroyCropper();
    });

    function destroyCropper() {
      if (image.offsetParent === null) {
        cropper.destroy();
        $image_input.value = '';
      }
    }
  });
});
