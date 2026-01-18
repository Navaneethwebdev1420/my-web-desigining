$(document).ready(function(){
    $(".btn").click(function(){
        alert("window clicked")
    })
    $(".btn").mouseenter(function(){
        $(this).css({"background":"red"})
         
        
        
    })
    $(".sub-btn").mouseenter(function(){
        $(this).css({"background":"red"})
    })
    
})