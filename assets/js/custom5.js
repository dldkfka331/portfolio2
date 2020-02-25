$(function(){

    //skrollr
    var s = skrollr.init(
        smoothScrolling = true
    );
    
    //메인 화살표
    setInterval(down,1000);
    function down(){
        $(".main .main_row").animate({bottom : "5%"},500, 'easeInCubic');
        $(".main .main_row").animate({bottom : "8%"},500,'easeOutCubic');
    };

    //메인 텍스트 지워지기    
    $(".main .main_box .mb_text").mousemove(function(){
        $(this).css("display","none")
    }); 

    //햄버거메뉴
    $(".ham").click(function(){
        $(this).toggleClass("click");
        $(".nav").toggleClass("click");
    });

   


    //소개부분 클릭이미지 반짝이기
    setInterval(click, 500);
    function click(){
        $(".click_alerm01").toggleClass("none");
    };
      
     //소개부분 이미지 생성
    $(".who_text_about .who_click").find("span").click(function(){
        let target =$(this);
        let index =target.index();
        let cookies = $(".who_click_img > div").eq(index);
        cookies.css("display" , "block");
    });

    
    
});