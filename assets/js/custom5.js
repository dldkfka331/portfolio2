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
    }
    
    
    $(".main .main_box .mb_text").mousemove(function(){
        $(this).css("display","none")
    });
});