var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    breakpoints: {
      // 480px以上の場合
      480: {
        slidesPerView: 1,
      },
    },
    loop: true,
    autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
    pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
    }
    
});

$(function(){
        $('.bikes').hover(function(){
            $(this).text('バイク');
        },function(){
            $(this).text('BIKES');
        });
        $('.news').hover(function(){
            $(this).text('ニュース');
        },function(){
            $(this).text('NEWS');
        });
        $('.athlete').hover(function(){
            $(this).text('ビアンキ　アスリート');
        },function(){
            $(this).text('BIANCHI AHELETE');
        });
        $('.about').hover(function(){
            $(this).text('ビアンキについて');
        },function(){
            $(this).text('ABOUT BIANCHI');
        });
        $('.store').hover(function(){
            $(this).text('ストア');
        },function(){
            $(this).text('STORE');
        });
        $('.online').hover(function(){
            $(this).text('ビアンキオンラインストア');
        },function(){
            $(this).text('BIANCHI ONLINE STORE');
        });
        $('.user').hover(function(){
            $(this).text('ユーザー登録');
        },function(){
            $(this).text('USER');
        });

         // ハンバーガーメニューが押された時
//         $('#toggle').on('click',function(){
//         $(this).toggleClass('on');
//         $(this).addClass();
//         $('.js-drower').toggleClass('on');
    
//         let isActive = $(this).hasClass('on');
//         toggleDrower(isActive);
// });
        // function toggleDrower(isActive) {
        // if (isActive) {
        //     $('#drower-bg').fadeIn(600);
        // } else {
        //     $('#drower-bg').fadeOut(600);
        // }
        //     };
        });
    