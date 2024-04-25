$(function(){
    //gnb
    $(".gnb").hover(
        
        function(){
            $("sub").stop().slideDown()
        },

        function(){
            $("sub").stop().slideUp()
        }

    )

    //modal
    $("showModal").click(function(){
            $("modal").show()
    })

    $("closeModal").click(function(){
        $("modal").hide()
    })

    //slide
    setInterval(function(){
        $(".slides").animate({top: "-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("top", 0)
        })
    }, 3000)

    //tab

    $ (".tab_tiltle h3").click(function(){
        $(".tab_tiltle h3").removeClass("active")
        $(this) .addClass("active")
    

        var idx = $(this).index()
        $ (".tab_contents .item") .hide()
        $ (".tab_contents .item") .eq(idx).show()
    })

})
