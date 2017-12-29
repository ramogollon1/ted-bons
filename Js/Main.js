	/* ------- Menu mobile --------*/
	var theToggle = document.getElementById('toggle');

	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	function addClass(elem, className) {
	    if (!hasClass(elem, className)) {
	    	elem.className += ' ' + className;
	    }
	}
	function removeClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	}
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(" " + className + " ") >= 0 ) {
	            newClass = newClass.replace( " " + className + " " , " " );
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}
	theToggle.onclick = function() {
	   toggleClass(this, 'on');
	   return false;
	}

	/* ------- Slider ------  */
	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }
	  slides[slideIndex-1].style.display = "block"; 
	}

	/* ------- Nav transparent scroll ------  */
	;(function(document, window, index) {
	  'use strict';

	  var elSelector = '.header-nav',
	    element = document.querySelector(elSelector);

	  if (!element) return true;

	  var elHeight = 0,
	    elTop = 0,
	    dHeight = 0,
	    wHeight = 0,
	    wScrollCurrent = 0,
	    wScrollBefore = 0,
	    wScrollDiff = 0;

	  window.addEventListener('scroll', function() {
	    elHeight = element.offsetHeight;
	    dHeight = document.body.offsetHeight;
	    wHeight = window.innerHeight;
	    wScrollCurrent = window.pageYOffset;
	    wScrollDiff = wScrollBefore - wScrollCurrent;
	    elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

	    if (wScrollCurrent <= 0)
	      element.style.top = '0px';

	    else if (wScrollDiff > 0)
	      element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

	    else if (wScrollDiff < 0) {
	      if (wScrollCurrent + wHeight >= dHeight - elHeight)
	        element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

	      else
	        element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
	    }

	    wScrollBefore = wScrollCurrent;
	  });

	}(document, window, 0));
