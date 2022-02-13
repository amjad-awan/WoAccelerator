$(document).ready(function(){
    $(".QAs-wrapper .card .questions span").click(function(){
        $(this).nextAll(".answer").slideToggle();

        var child = $(this).children();
        if(child.hasClass("fa-solid fa-plus"))
        {
            child.removeClass("fa-solid fa-plus").addClass("fa-solid fa-minus");
        }

        else
        {
        child.removeClass("fa-solid fa-minus").addClass("fa-solid fa-plus");
        }



    })
})

/*--------- ScrollReveal ------*/

window.sr=ScrollReveal();
sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance:'5rem',
       reset: true,
    delay:200
});

window.sr=ScrollReveal();
sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:1000,
    distance:'5rem',
       reset: true,
    delay:200
});

