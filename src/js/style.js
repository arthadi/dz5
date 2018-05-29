$(function () {

//управление окном регистрации
    var regBtn = $(".iconLogReg");
    var regFraim = $(".logReg");
    var iconCont = $(".iconLogReg > a > i");
    var classClose = "fa fa-times";
    var classUser = "fa fa-user";
    var w = $(window).width();

    $(window).on('resize', function () {
        if(regFraim.attr('style')){
            regFraim.removeAttr('style');
            iconCont.removeClass();
            iconCont.addClass(classUser);
        }
        w = $(window).width();
        return  w;
    });

    regBtn.on("click", function (e) {
        e.preventDefault();
        regFraim.css('z-index', 300);
        var position = parseInt(regFraim.css("right"));
        if(position < 0){
                regFraim.css({transition:'all 0.8s', right: 0 });
                iconCont.removeClass();
                iconCont.addClass(classClose);
                return false;
        }
        else{
            if(w <= 390) {
                regFraim.css({transition: 'right 0.8s', right: "-275px"});
                setTimeout(function () {
                    regFraim.css('z-index', 10);
                }, 800);
                iconCont.removeClass();
                iconCont.addClass(classUser);

            }
            else{
                regFraim.css({transition:'right 0.8s', right: "-331px" });
                setTimeout(function () {
                    regFraim.css('z-index', 10);
                }, 800);
                iconCont.removeClass();
                iconCont.addClass(classUser);
            }
            return false;
        }
    });
//автоматическия подстановка маркера к пункту меню с подменю

    var menuPuncts = $(".hiddenMenu > li > .submenu"); //Подменю
    var submenuClassName = ".submenu"; //Подменю класс

    FUNCT_autoChange(menuPuncts, submenuClassName);

    function FUNCT_autoChange(sub, subName) {

        if($(".hiddenMenu > li > ul ").is(subName)){
            $(sub).prev().children().after("<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>");
        }
    }

//подключение слайдера
$(".slaider").slaiderSimpl({
        time: 500,
        width: 2045
    });

//подключение слайдера футера
    $(".slaiderFooter").slaiderSimpl({
        time: 500,
        width: 1148
    });



//подключение плагина выравнивания высоты фреймов
    $(".itemBlog").sameHeight({
        widthWindow: 400
    });

});



    /*
//управление высотой фреймов
    var contents = $(".itemBlog");
    var w = $(window).width();

    if(w >= 600) {
        FUNC_HeightCont(contents);
    }

    function FUNC_HeightCont(obg) {
        var h = 0;
        if(obg.attr('style')){
            obg.removeAttr('style');
        }
        obg.each(function () {
            if(h < obg.height()){
                h = obg.height();
                return h;
            }
        });
            obg.css('height', h + "px");
    }
    $(window).on("resize", function(){
        w = $(window).width();
        if(w >= 600){
        setTimeout(function(){
            FUNC_HeightCont(contents);
        },600);
        }
        else{
            contents.removeAttr('style');
        }
        return w;
    });*/


