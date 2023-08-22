

/* Scroll up button */
const toTop=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if( window.pageYOffset>150){
    toTop.classList.add("active");
    }else {
        toTop.classList.remove("active");
    }
})

/* navlink Smooth scroll */


const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(function (eachLink) {
    eachLink.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const originalTop = targetSection.getBoundingClientRect().top - 120;
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
}



$(window).on("load",function() {

/* Flex Slider */

    $("#slider .slides li .cta").css('display', 'none'); //hide 
    $("#slider .slides li .welcome h2").css('display', 'none'); //hide 
    $('.flexslider').flexslider({
        animation: "slide",
        start: function () {
            $("#slider .slides li .cta").slideDown(2000,"easeOutBack");
           $("#slider .slides li .welcome h2").fadeIn(2000);
        },
        after: function () {

            $("#slider .slides li .cta").slideDown(2000,"easeOutBack");
           $("#slider .slides li .welcome h2").fadeIn(2000);
        },
        before: function () {
            $("#slider .slides li .cta").css('display', 'none');
           $("#slider .slides li .welcome h2").css('display', 'none');
        },
        slideshowSpeed:3000,
        direction: "horozontal",
        reverse:false,
        pauseOnHover:false,
        animationLoop: true,
        controlNav: true,
        directionNav: false
    });

/* pricing tabs */

    $("#tabs>ul>li>a").click(function(){
    $("#tabs>ul>li>a").css({ background: "#c8d6af",color:"#333"}) ;
    $(this).css({ background: "#f7ffea",color:"#333"});
    const thisTab=$(this).attr("href");
    $(thisTab).css({ background: "#f7ffea"});
    // alert(thisTab);
    $("#tabs>div:visible").fadeOut(100,function(){
        $(thisTab).fadeIn(200);
    })
});
   
/* Content rotator */
let counter=1;
    function contentRotater(){
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000,function(){
         if($(this).is("#rotator blockquote:last-child")){
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter=1;
                    contentRotater();
                });

            },3000)
         }
         else{
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter++;
                    contentRotater();
                });

            },3000)
         }
    });
    }

    contentRotater();



    /* Features Galore */

    function run() {
        var prev = $("#eachfeature li:first-child");
        $.unique(prev).each(function(i) {
          $(this).delay(i*600).slideUp(function() {
            $(this).appendTo(this.parentNode).slideDown();
          }).css( "color", "red" );
    
          $("#eachfeature li").css('color', 'black');
          
          setTimeout(function(){
            $("#eachfeature li:first-child").css('color', 'red');
          },500);
        });
    }
    
    window.setInterval(run,1000);

});

