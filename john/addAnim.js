$(Document).ready(function(){
    $(".top").on("click", function() {
        $(".top").toggleClass("open");
        $(".morten").toggleClass("open");
        $(".bottom-overlay").toggleClass("open");
    });
    // $(".morten").on("click", function() {
    //     $(".morten").toggleClass("clicked");
    //     $(".bg-image").toggleClass("transition");
    // });
});