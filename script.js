
$(document).ready(function () {
    $('.project-1-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-1-info').removeClass("unselected");
        $('.project-1-info').addClass("selected");

    })
    $('.project-2-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-2-info').removeClass("unselected");
        $('.project-2-info').addClass("selected");
    
    })
    $('.project-3-link').click(function(){
        console.log("clicked");
        //Remove selected from all
        $(".main-div").removeClass("selected");
        $(".main-div").addClass("unselected");
        //Add selected to clicked item
        $('.project-3-info').removeClass("unselected");
        $('.project-3-info').addClass("selected");
        
    })
});