var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);
var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 33,
      style = '';
  if(gender != "female" ){
	  // Set active label
	  $('#rangec').addClass('range-colorchange');
	  $('.range-labels li').removeClass('active selected');
	  $('.range-labels li').removeClass('active-colorchange selected-colorchange');
	  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
	  
	  curLabel.addClass('active-colorchange selected-colorchange');
	  curLabel.prevAll().addClass('selected-colorchange');
  }else{
	// Set active label
	  $('#rangec').removeClass('range-colorchange');
	  $('.range-labels li').removeClass('active selected');
	  $('.range-labels li').removeClass('active-colorchange selected-colorchange');
	  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
	  
	  curLabel.addClass('active selected');
	  curLabel.prevAll().addClass('selected'); 
  }
  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, '+backcolor+' 0%, '+backcolor+' ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, '+backcolor+' 0%, '+backcolor+' ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});