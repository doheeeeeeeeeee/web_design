
$(function(){
    //gnb
    $(".gnb").hover(){
        function(){
            $ ("gnb ul"),stop(), slidedown()
        }
        function(){
            $(".gnb ul").stop().slideup
        }
        }

    }

        //slide
        setInterval(function(){},3000)
            $(".slides").animate({top : "-100"}, function(){
                $(this),append($(".slide").eq(0))
                $(this).css("top",0)
            })

        //tab
        $("tab_tile h4").click(function(){
            $(".tab_title h4").removeClass("active")
            $(this).addClass("active")
            var
            $ ("tab_contents ul").hide(){

            }
            $("tab_contents ul").
        })

        //modal
        $("showModal").click(function(){
            $(".modal").
        })

        $("showModal").click(function(){
            $(".modal").
        })

})
