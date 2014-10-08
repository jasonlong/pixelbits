$(document).on('click', '.js-show-code', function(e){
  e.preventDefault();
  $(this).parent().next('.code').show();
});
