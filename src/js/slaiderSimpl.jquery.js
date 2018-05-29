(function($){
$.fn.slaiderSimpl = function(param){
		
		var option = $.extend({
			time: 500,
			width:650
		},param);
		
	this.each(function(){	
	var mainContAll = $(this);
	var contAll = mainContAll.children();
	var contPict = contAll.children().first();
    var contPictImg = contPict.children();
	var contBtn = contAll.children().last();
	var btnPrevClass = contBtn.children().children().first().attr("class");

	var btnNextClass = contBtn.children().children().last().attr("class");
	var hBack = 0;
	contAll.css("maxWidth", option.width);

	function heightCont(){
		contPictImg.each(function(){
		var h = $(this).height();
		if(h >= hBack){
			hBack = h;
			}
		});
		contPict.height(hBack);
		return hBack = 0;
	}
	heightCont();

//анимация слайдера	
	var arrPict = [];
	contPictImg.each(function(){
		arrPict.push($(this));
	});
	contBtn.each(function(){
		contBtn.children().children().on('click', function(){
			var btn = $(this).attr('class');
			var lastIndex = contPictImg.length;

			if(btn === btnNextClass){
				for(var i = lastIndex-1; i > 0; i--){
                    if(parseInt(arrPict[i].css('opacity')) === 1) {
                        arrPict[i].animate({"opacity": 0}, option.time, function () {
                            contPict.prepend(arrPict[i]);
                        });
                        return false;
                    }
				}
			}
			else if(btn === btnPrevClass){
				for( var j = 0; j < lastIndex; j++){
					if(parseInt(arrPict[j].css('opacity'))  === 0){
                        contPict.append(arrPict[j]);
                        arrPict[j].animate({"opacity": 1}, option.time);
						return false;
					}
				}
			}
		});
	});
	
	$(window).resize(function() {

		heightCont();

	});
	});
return this;

};
})(jQuery);	
