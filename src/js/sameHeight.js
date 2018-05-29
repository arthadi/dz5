(function($){
    $.fn.sameHeight = function(param){

        var opt = $.extend({
            widthWindow: 600
        },param);

            var $item = $(this);
            var w = $(window).width();
            var h = function(obg) {

                    var n = 0;
                    obg.each(function () {
                    if(obg.attr('style')){
                        obg.removeAttr('style');
                    }
                    var hF = obg.outerHeight();

                        if(n < hF){
                           n = hF;
                        }
                    });
                    return n;
                    };

            if(w > opt.widthWindow) {
                $item.css('height', h($item) + 'px');
            }

            $(window).on("resize", function(){
                w = $(window).width();
                if(w > opt.widthWindow){
                    setTimeout(function(){
                        $item.css('height', h($item) + 'px');
                   },300);
                }
                else{
                    $item.each(function () {
                        $(this).removeAttr('style');
                    });
                }
            });

        return this;
    };
})(jQuery);