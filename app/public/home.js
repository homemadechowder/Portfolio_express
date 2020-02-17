
function menu(){
        
    var item = $(this).attr("id");

        console.log(item);

        switch(item){
            case "aboutme":
                res.redirect('/aboutme');
            case "portfolio":
                res.redirect('/portfolio')
            case "contactme":
                contactPage();
                break;
            case "techdemo":
               
                break;     
            case "blog":
               
                break;     
            case "resume":
                
                break; 
   
        }
    
}


$(document).on("click", ".homeCard", menu);