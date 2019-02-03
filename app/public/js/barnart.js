//this code will help bring the bootstrap modal element into focus on mobile devices
$('#galleryModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

//this code will grab the generic modal for the gallery and switch out the data source to match the picture pressed
$('#galleryModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var pic = button.data('pic-source') // Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
var modal = $(this)
modal.find('.modal-img').src(recipient);
})