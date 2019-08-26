$("ul").on("click", "li" , function(){
  $(this).toggleClass("select");
});

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
// to enter your todos
$("input[type='text'").keypress(function(event){
    
    if(event.which === 13){
        var todotext = $(this).val();
    $(this).val("");
    if(todotext===""){
    //Alert message  
      swal({
        title: "Ooops!",
        text: "Write Something To Add!",
        icon: 'info',
        buttons: true,
        dangerMode: true,
      });
      
    }else if(todotext.length <=40){
      $("ul").append("<li><span title='Delete this To-Do'><i class='fas fa-trash'></i></span> " + todotext + "</li>");
    }else{
      swal("Ooops!", "Word limit Exceeded", "info");
    }
}
});

//to hide input area
$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});

// to delete all todos
$(".fa-cog").click(function(){
  $("li").fadeOut(500, function(){
    $("li").remove();
  });
});
