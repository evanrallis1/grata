(function(){
if(Grata_Widget && Grata_Widget.business_id){
	var h='k2b3lpt95z';
	var l='https://app.gratapro.com/assets/img/grataWidgetBtn.png';
	var e='https://app.gratapro.com/assets/img/btn-close.png';
	var c='https://app.gratapro.com/assets/css/grata-embed-v1.css';
	var i='https://app.gratapro.com/submit-rating/business?business='+Grata_Widget.business_id+'&employee='Grata_Widget.user_id;

	var link = document.createElement("link");
	link.href = c;
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);

	let divCta = document.createElement('div');
	divCta.id = h+'-grata-cta';
	divCta.style.overflow='hidden';
	divCta.style.width = 0;
	divCta.style.height = 0;
	divCta.innerHTML = '<a id="'+h+'-button" href="#"><img src="'+l+'" /></a>'
	document.body.appendChild(divCta);

	let divWidget = document.createElement('div');
	divWidget.id = h+'-grata-widget';
	divWidget.style.overflow='hidden';
	divWidget.style.width = 0;
	divWidget.style.height = 0;/*width="426" height="620"*/
	divWidget.innerHTML = '<div class="'+h+'-inner"><iframe id="'+h+'-iframe"  src="'+i+'"></iframe><a id="'+h+'-close-widget-grata" href="#"><img src="'+e+'" class="'+h+'-ciw" /></a></div>';
	document.body.appendChild(divWidget);

	var ctaButton = document.getElementById(h+'-button');
	var ctaCloseBtn = document.getElementById(h+'-close-widget-grata');
	var grataWidget = document.getElementById(h+'-grata-widget');

	ctaButton.addEventListener('click', event => {
		grataWidget.classList.toggle("open-widget");
		event.preventDefault();
		event.stopPropagation();
	});
	ctaCloseBtn.addEventListener('click', event => {
		grataWidget.classList.toggle("open-widget");
		event.preventDefault();
		event.stopPropagation();
	});
}
})();
