
function menu(){
        
    var item = $(this).attr("id");

        console.log(item);

        switch(item){
            case "aboutme":
                window.location.href('/aboutme');
            case "portfolio":
                window.location.href('/portfolio')
            case "contactme":
                window.location.href('/contactme');
                break;
            case "techdemo":
               
                break;     
            case "blog":
               
                break;     
            case "resume":
                
                break; 
   
        }
    
}

$(".fa-linkedin").click(function(){
    window.open("https://www.linkedin.com/in/andrew-lu-2997b0109/","_blank");
})

$(".fa-facebook-square").click(function(){
    window.open("https://www.facebook.com/SchismoGenesis","_blank");
})

$(".fa-github").click(function(){
    window.open("https://www.github.com/homemadechowder","_blank");
})

$(document).on("click", ".homeCard", menu);