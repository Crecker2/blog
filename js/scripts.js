function godown(section){
	$('html, body').animate({
		scrollTop: ($(section).offset().top - 70)
	},0,'swing');
}

$(document).ready(function(){
	(function() {
		  var links = $(".articlebody p a");
		  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
		    // can also be
		    //  links[i].hostname != 'subdomain.example.com'
		    if (links[i].hostname != window.location.hostname) {
		      links[i].target = '_blank';
		      links[i].className += ' externalLink';
		    }
		  }
		})();
		var scrolled = false;
		function onscroll(){
			if($(window).width() > 768){
				if(!scrolled){
					scrolled = true;
					if($(window).scrollTop() >= 100){
									$('.navbar-brand').css('font-size','20px');
						$('nav').css('height','70px');
							} else {
									$('.navbar-brand').css('font-size','25px');
						$('nav').css('height','75px');
							}
					scrolled = false;
				}
			}
		}
		$(window).scroll(onscroll);
		onscroll();

		$('.carousel').carousel();
		$('.carousel .carousel-item:first-of-type').addClass("active");
});
