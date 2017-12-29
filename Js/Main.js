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
	var node = document.getElementById('nav-header'),
  nodeOffs = node.offsetTop,
  parent = node;
	while(parent = parent.offsetParent){
		if(parent.offsetTop){
		  nodeOffs += parent.offsetTop;
		}
	}
	window.addEventListener('scroll', function(event){    
	  var scrollPos = document.body.scrollTop;
	  if (scrollPos > nodeOffs){
	    if (scrollPos < (document.body.scrollHeight - node.clientHeight - nodeOffs))
			node.classList.add("nav-colored");
			node.classList.remove("nav-transparent");
	  }
	  else {
      node.classList.add("nav-transparent");
	    node.classList.remove("nav-colored");
	  }
	}); 

