/**
 * Created by han on 9/23/15.
 */



function switchLanguage() {

    var screenshotPath;
    var downloadBtn;

    switch ($( "select option:selected" ).val()) {
        case 'german':
        default :
            screenshotPath = "de";
            downloadBtn = "Download_on_the_App_Store_Badge_DE_Source_135x40.svg";
            break;
        case 'chinese':
            screenshotPath = "zh";
            downloadBtn = "Download_on_the_App_Store_Badge_CN_135x40.svg";
            break;
        case 'english':
            screenshotPath = "en";
            downloadBtn = "Download_on_the_App_Store_Badge_US-UK_135x40.svg";
            break;
    }

    $("#swipeSlides").empty();
    for (var i = 1; i<= 5; i++) {
        $("#swipeSlides").append('<div class="swiper-slide" style=background-image:url("' +
            'img/' + screenshotPath + '/5.5-inch%20(iPhone%206+)%20-%20Screenshot%20' + i + '.jpg")></div>');
    }

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0
    });

    $('#download-app').css('background-image','url(' + 'img/' + screenshotPath + '/' + downloadBtn +')');
    window.lang.change(screenshotPath);
}


function init() {
    window.lang.dynamic('zh', 'lang/zh.json');
    window.lang.dynamic('de', 'lang/de.json');
    switchLanguage();
}


init();