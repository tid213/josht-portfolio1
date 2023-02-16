

$('#clicked').click(function(){
    console.log("clicked");
    //Remove selected from all
    $(".main-div").removeClass("selected");
    $(".main-div").addClass("unselected");
    //Add selected to clicked item
    $('.project-1-info').addClass("selected");

})