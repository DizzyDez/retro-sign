var $body = $('body');
var $svg = $('svg');

var $btn = $('.btn');
var $engage = $('.engage');
var $lines = $('.lines');

$btn.on('click', function (e) {
  $lines.toggleClass('draw');
  $lines.toggleClass('lines');
  $svg.toggleClass('lined');
  $engage.toggleClass('orange');
});
