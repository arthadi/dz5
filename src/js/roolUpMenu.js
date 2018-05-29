$(function() {

        $('.roolApCont').slideUpper({
            time: 500, //время анимации
            targetCont: 'mainMenuAll' //класс анимируемого фрейма
        });

        $('.hiddenMenu .mainMenu > a').slideUpper({
            time: 500,
            targetCont: 'submenu'
        });

});
