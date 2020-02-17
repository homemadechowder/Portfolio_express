var unlock = "";
var unlock2 = "";
var limit = [];
var limit2 = [];
var width = '';
var lockFlag = false;
var enable = true;
var border = document.getElementById("border");
var border2 = document.getElementById("border2");
var line = document.querySelector(".box");

$(document).ready(function(){
    //Entrance page overlay
        $("#main").hide();
        $(".contactForm").hide();
        $("#border").hide();
        $("#border2").hide();
    
        var sound = $(".foot").prepend("<i class='icon fas fa-volume-mute'><p id = 'sound'>Click to turn volume on</p></i>");
    
        $(".fa-volume-mute").on("click", function(){
            $(".fa-volume-mute").replaceWith("<i class='icon fas fa-volume-up'><p id = 'sound'>Now Scroll!</p></i>");
        })
       
        var letter = $(".box");
        var letter2 = $(".box2");
    
        letter.hide();
        letter2.hide();
    
        var audio = new Audio("../assets/ding.wav");
    
          
        
            letter.trigger('click');
            //Obtain Mouse Scroll Information up or down
    
            window.addEventListener("wheel", event => {
            
            const delta = Math.sign(event.deltaY);
            console.log(delta);
            letter.show();
            letter2.show();
            
            unlock = $(".box").attr("style");
            unlock2 = $(".box2").attr("style");
            // console.log(unlock);
            // console.log(unlock2);
    
            //Honestly I'm pretty big brained, but to scale I just get width yeehaw
            width = document.getElementById("lock").offsetWidth;
            //console.log(width);
            
            
            
            //if scrolling up 
            if (delta == -1 && lockFlag == false){
             
                letter.animate({ top: "-=100px" }, "normal");
                letter2.animate({ top: "+=100px" }, "normal");
                
            }
            //if scrolling down
            else if (delta == 1 && lockFlag == false){
                
                letter.animate({ top: "+=100px" }, "normal");
                letter2.animate({ top: "-=100px" }, "normal");
            }
            
            if (delta === 1){
                limit.push(delta);
            }
            if (delta === -1){
                limit2.push(delta);
            }
           
            if (limit.length - limit2.length === 5){
                lockFlag = true;
                console.log("unlocked by flag");
                console.log(unlock);
                console.log(unlock2);
                if (unlock == "top: 200px;"&& unlock2 == "top: 320px;"){
                    console.log("unlocked");
                    
                    entrance();
                }
                else{
                    setTimeout(ding, 1550);
                    setTimeout(entrance, 1900);
                }
                
            }
        })
        
            
function ding(){
        audio.play();
}

function entrance(){
    if (enable){
    audio.play();
     }
    console.log("unlocked");
    lockFlag = true;
                
    $("#border").show();
    $("#border2").show();
    //Scaled width
              
    $("#border").animate({width: width+"px"},100);
    $("#border2").animate({width: width+"px"},100);
                
            
        border.addEventListener("transitionend", function(){
            setTimeout(function(){
                letter.fadeOut("slow");
                letter2.fadeOut("slow");
                $("#border").fadeOut("slow");
                $("#border2").fadeOut("slow");
                $(".icon").fadeOut("slow")
                    
                },700);
                           
            setTimeout(function(){
                $("#lock").hide();
                letter.hide();
                letter2.hide();
                enable = false;
                $("#main").fadeIn("slow");
                $(".pPage").hide();
                    ;
                },1200);
    
               
               
        });
       
}

}) 