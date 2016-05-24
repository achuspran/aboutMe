//Author: Aswathi Prakash
//Date: 17-May-2016

$(document).ready(function(){

$("#navMenuIcon").click(function(){
        $(this).toggleClass("open");
    });
    //to scroll to top of the page on 'go to top' arrow click
    $("a[href='#myPage']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
    });

    $(window).scroll(function() { 
        //to show and hide 'scroll to top ' icon
        var winTop = $(window).scrollTop();
        if (winTop > 100) {
            $(".toTop").fadeIn();
        } else {
            $(".toTop").fadeOut();
        }

        $(".slideanim").each(function(){
            var pos = $(this).offset().top;      
            if (pos < winTop + 600) {
                $(this).addClass("slide1");
            }     

        });
    });

 //to scroll to particular section of the page on menu select
    $(".navbar-nav li").click(function() {  
        $('html, body').animate({
            scrollTop: $("this").offset().top- 80
        }, 2000);
    });
});

//to animate the input label on focus - under Contact Me section
$(function() {
    $("body").on("input propertychange", ".contactLabel", function(e) {
        $(this).toggleClass("contactLabelValue", !! $(e.target).val());
    }).on("focus", ".contactLabel", function() {
        $(this).addClass("contactLabelFocus");
    }).on("blur", ".contactLabel", function() {
        $(this).removeClass("contactLabelFocus");
    });
});

