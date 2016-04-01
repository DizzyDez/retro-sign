var $body = $('body');

var $btn = $('.btn');
var $engage = $('.engage');
var $lines = $('.lines');

$btn.on('click', function () {
  $lines.toggleClass('draw');
  $engage.toggleClass('orange');
});
