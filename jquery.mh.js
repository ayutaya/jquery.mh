/*
* //please set each child highest height of selector's children.
* $('ul').mh(); 
*
* //please set manual height to selector's children.
* $('ul').mh(200);
*/

$.fn.mh = function(h) {
	if(h==0) return;
	var targets = $(this).children();
	if (targets.length == 0)
		return;
	if (h === void 0) {
		h = 0;
		targets.each(function() {
			var tH = $(this).height();
			h = (h < tH) ? tH : h;
		});
	}
	targets.height(h);
}