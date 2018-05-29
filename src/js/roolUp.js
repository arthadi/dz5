$(function(){
    $.fn.slideUpper = function(param){

        var opt = $.extend({
            time: 300,
            targetCont: ''
        },param);

        this.each(function(){
            var $firstLiA = $(this);
            var $allUl = $firstLiA.next();
            var targetCon = $('.' + opt.targetCont);


///// код по которому возник вопос

            $(document).on('click', function (e) {
                var w = $(window).width();
                var targets = $(e.target).parents(".heder");
                var clas = targets.attr('class');

                if(!clas){
                    if(w <= 880){
                    $allUl = $('.mainMenuAll');
                    $allUl.stop(true, true).animate({'height': '0'}, opt.time, function () {
                        $allUl.css('display', 'none');
                    });
                    $allUl = $('.submenu');
                    $allUl.stop(true, true).animate({'height': '0'}, opt.time, function () {
                        $allUl.css('display', 'none');
                    });
                    }
                    else{
                        $allUl = $('.submenu');
                        $allUl.stop(true, true).animate({'height': '0'}, opt.time, function () {
                            $allUl.css('display', 'none');
                        });
                    }
                }
                else{
                    return false;
                }
            });
//////


            $firstLiA.on('click', function(event){

                $allUl = $firstLiA.next();
                var allUlClass = $allUl.attr("class");

               if(targetCon.children().children().children().is(':visible')){
                    targetCon.children().children().children().removeAttr('style');
                }
                var heightAllUl = parseInt($allUl.css('height'));

                if(allUlClass){
                    event.preventDefault();
                    if(heightAllUl > 0){
                        $allUl.stop(true, true).animate({'height': '0'}, opt.time, function () {
                            $allUl.css('display', 'none');
                        });
                    }
                    else{
                        $("." + allUlClass).animate({'height': 0}, opt.time);
                        var h = $allUl.css('display', 'block').css('height', 'auto').outerHeight();
                        $allUl.css('height', 0);
                        $allUl.stop(true).animate({'height': h}, opt.time);
                    }
                }
            });


            $(window).resize(function(){
                    if($allUl.attr('style') || targetCon.children().children().children().attr('style')){
                        $allUl.removeAttr('style');
                        targetCon.children().children().children().removeAttr('style');
                    }
            });
        });
        return this;
    };
});