$(document).ready(function(){
    // Tabs
    $('.tab-link').click( function() {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
    });

    // Accordion
    $('.main-wrapper .box-wrapper h2').click(function () {
        $(this).toggleClass('active').siblings('p').slideToggle();
        $(this).parent().siblings().children('p').slideUp().end().children('h2').removeClass('active');
    });

    //Custom Slider
    $(document).ready(function () {
        let slideCount = $('.slide').length;
        let currentIndex = 0;
    
        // Dynamically create dots based on the number of slides
        for (let i = 0; i < slideCount; i++) {
            $('.dots').append('<div class="dot"></div>');
        }
        
        // Initially set the first dot as active
        $('.dot').eq(0).addClass('active-dot');
    
        $('.slide').hide();
        $('.slide').eq(currentIndex).show().addClass('active');
    
        $('.prev').on('click', function () {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slideCount - 1;
            }
            showSlide(currentIndex);
        });
    
        $('.next').on('click', function () {
            currentIndex++;
            if (currentIndex >= slideCount) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        });
    
        $('.dot').on('click', function () {
            currentIndex = $(this).index();
            showSlide(currentIndex);
        });
    
        function showSlide(index) {
            $('.slide').hide().removeClass('active');
            $('.dot').removeClass('active-dot');
            $('.slide').eq(index).show().addClass('active');
            $('.dot').eq(index).addClass('active-dot');
        }
    
        showSlide(currentIndex);
    });
    
      
    //   Search
      $(".fa-search").click(function(){
        $(".wrap, input[type='text']").toggleClass("active");
      });
    
    // // Image Gallery
    $(function(){
        // Function to update the lightbox image
        var updateLightboxImage = function(){
            var src = $('.gallery img.active').attr('src');
            $('#lightbox img').attr('src', src);
        };
    
        // When an image is clicked
        $('.gallery img').click(function(){
            $('.gallery img').removeClass('active');
            $(this).addClass('active');
            updateLightboxImage();
            $('#lightbox').css('display', 'flex'); // Show the lightbox
        });
    
        // Close button clicked
        $('.close').click(function(){
            $('#lightbox').hide();
            $('.gallery img').removeClass('active');
        });
    
        // Next button clicked
        $('.next').click(function(){
            var next = $('.gallery img.active').next('img');
            if(next.length === 0){ // If it's the last image
                next = $('.gallery img').first(); // Loop to the first image
            }
            $('.gallery img.active').removeClass('active');
            next.addClass('active');
            updateLightboxImage();
        });
    
        // Prev button clicked
        $('.prev').click(function(){
            var prev = $('.gallery img.active').prev('img');
            if(prev.length === 0){ // If it's the first image
                prev = $('.gallery img').last(); // Loop to the last image
            }
            $('.gallery img.active').removeClass('active');
            prev.addClass('active');
            updateLightboxImage();
        });
    
    });
  });



