// JavaScript Document
 $.fn.multipop1 = function () {
      $(this).click(function (event) {
        var datapop = $(this).attr('data-pop1');
        $(datapop).fadeIn();
        
        $('.multi_close').click(function (event){
          $(datapop).fadeOut();
         
        });
      });
    }
    $('.multi-pops').click(function (event){
      event.stopPropagation();
    });
//    $('.multi_pop_wrap').css({position:'fixed',top:'10%',left:'35%','display':'block'});
    $('.popup_open_team').multipop1()

	$(document).ready(function (){
$("body").keydown(function (event) {
    if(event.which==27){
        $(".multi-pops").fadeOut();
        event.preventDefault()
    }
});
});

$(document).mouseup(function(e)
{
    var container = $(".multi-pops");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
});


//toogle

$(document).ready(function () {
    $('.accordion_head').click(function (e) {
        e.stopPropagation();
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            // $(".plusminus").html('<img src="images/plusz.png" alt="+">');
            $(".plusminus").html('<img src="./images/plusz.png" alt="+">');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            // $(this).children(".plusminus").html('<img src="images/plusz.png" alt="+" >');
            $(this).children(".plusminus").html('<img src="./images/plusz.png" alt="+" >');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            // $(this).children(".plusminus").html('<img src="images/minusz.png" alt="-">');
            $(this).children(".plusminus").html('<img src="./images/minuz.png" alt="-">');
        }
    });
});
equalheight = function (e) {
    var t, n = 0,
        a = 0,
        i = new Array;
    $(e).each(function () {
        if (t = $(this), $(t).height("auto"), topPostion = t.position().top, a != topPostion) {
            for (currentDiv = 0; currentDiv < i.length; currentDiv++) i[currentDiv].height(n);
            i.length = 0, a = topPostion, n = t.height(), i.push(t)
        } else i.push(t), n = n < t.height() ? t.height() : n;
        for (currentDiv = 0; currentDiv < i.length; currentDiv++) i[currentDiv].height(n)
    })
}, equalheight(".footz  "), $(window).on("resize", function () {
    equalheight(".footz")
});

//gallery


$(".thumbLink").click(function(event) {
    var image = $(this).attr("rel");
    $(".thumbLink").removeClass('active');
    $( this ).addClass( "active" );
    $('.main-pimage').hide();
    $('.main-pimage').fadeIn('slow');
    $('.main-pimage').html('<img src="' + image + '" class="custom img-fluid"/>');
    var image_c = $(this).attr("relcon");
       return false;
});

$("#next").click(function() {
    $('.thumbLink.active').parent('.tsack').next('div').find($('.thumbLink')).trigger('click')
});

$("#prev").click(function() {
    $('.thumbLink.active').parent('.tsack').prev('div').find($('.thumbLink')).trigger('click')
});


// multi
$.fn.multipop = function () {
    $(this).click(function (event) {
        var datapop = $(this).attr('data-pop');
            $(datapop).siblings(':visible').fadeOut();
            $(datapop).fadeIn();
            return false;

    });

}
$('.multi_pop').click(function (event){
    event.stopPropagation();
});

$('.popup_open').multipop()

