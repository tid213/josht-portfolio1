
$(document).ready(function () {

   
    //Onclick Functions
    $('.project-1-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-1-info').removeClass("unselected");
        $('.project-1-info').addClass("selected");
        $('.pl-border-select').removeClass("project-list-border");
        $('.pl-border-select').removeClass("project-list-border-center");
        $('.pl-border-select').removeClass("project-list-border-bottom");
        $('.pl-border-select').addClass("project-list-border-top");
        $('.projects-line').removeClass("projects-line-on");

    })
    $('.project-2-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-2-info').removeClass("unselected");
        $('.project-2-info').addClass("selected");
        $('.pl-border-select').removeClass("project-list-border");
        $('.pl-border-select').removeClass("project-list-border-top");
        $('.pl-border-select').removeClass("project-list-border-bottom");
        $('.pl-border-select').addClass("project-list-border-center");
        $('.projects-line').removeClass("projects-line-on");
    
    })
    $('.project-3-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-3-info').removeClass("unselected");
        $('.project-3-info').addClass("selected");
        $('.pl-border-select').removeClass("project-list-border");
        $('.pl-border-select').removeClass("project-list-border-top");
        $('.pl-border-select').removeClass("project-list-border-center");
        $('.pl-border-select').addClass("project-list-border-bottom");
        $('.projects-line').removeClass("projects-line-on");
        
    })
});

