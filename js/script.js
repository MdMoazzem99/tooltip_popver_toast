// tooltp
$(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
// popover
$(function(){
	$('[data-toggle="popover"]').popover();
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});
// toast
$(function(){
  $('.toast').toast('show');
});