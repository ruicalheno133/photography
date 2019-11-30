$(()=>{
    var path = location.pathname;
    
    $('.nav-link').each(function(){
        if($(this).attr('href') == path){
            $(this).addClass('active');
        }
    });

    $(function() {
      $('.mail').hover(function() {
        $('.insta').css('opacity', '0.5');
        $('.px').css('opacity', '0.5');
    }, function() {
        $('.insta').css('opacity', '1');
        $('.px').css('opacity', '1');
      });
    });

        $(function() {
          $('.px').hover(function() {
            $('.insta').css('opacity', '0.5');
            $('.mail').css('opacity', '0.5');
          }, function() {
            $('.insta').css('opacity', '1');
            $('.mail').css('opacity', '1');
          });
        });

        $(function() {
          $('.insta').hover(function() {
            $('.mail').css('opacity', '0.5');
            $('.px').css('opacity', '0.5');
          }, function() {
            $('.mail').css('opacity', '1');
            $('.px').css('opacity', '1');
          });
        });

    $('.row').removeClass('fade-out');
})