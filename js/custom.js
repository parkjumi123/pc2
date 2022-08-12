$(function(){ //문서 로드 후에 실행

    //sc-new//

    var swiper = new Swiper(".new-prd", {
        slidesPerView: 4,
        spaceBetween: 10,    //마진//
    });

    var swiper = new Swiper(".best-prd", {
        slidesPerView: 3,
        spaceBetween: 0,    //마진//
    });


    $(window).scroll(function(){
        curr = $(window).scrollTop();
        target = $('.sc-best').offset().top;

        if(curr >= target){
            $('.sc-best .group-nav').addClass('fixed');

        }else{
            $('.sc-best .group-nav').removeClass('fixed')
        }

        data1 = $('[data-target=1]').offset().top;
        data2 = $('[data-target=2]').offset().top;
        data3 = $('[data-target=3]').offset().top;
        data4 = $('[data-target=4]').offset().top;
        data5 = $('[data-target=5]').offset().top;
        data6 = $('[data-target=6]').offset().top;

        $('.best-category li').removeClass('active');
        if(curr > data6){
            $('.best-category li').eq(5).addClass('active');
        } else if(curr > data5){
            $('.best-category li').eq(4).addClass('active');
        } else if(curr > data4){
            $('.best-category li').eq(3).addClass('active');
        } else if(curr > data3){
            $('.best-category li').eq(2).addClass('active');
        } else if(curr > data2){
            $('.best-category li').eq(1).addClass('active');
        } else if(curr > data1){
            $('.best-category li').eq(0).addClass('active');
        }
    })


})  //이건 지우지 말자 한번만 쓰는 거다