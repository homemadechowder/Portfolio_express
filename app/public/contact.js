
$(document).on("submit", ()=> {
    $(".err").empty();
    event.preventDefault();

    var name = $("#nameInput").val().trim()
    var email = $("#emailInput").val().trim()
    var message = $("textarea#messageInput").val()

    if (name == 0){
        $("#nameCheck").append("<p class = 'err' style = 'font-size: 50%; color: red;' >Please input name</p>")
        console.log("?")
    }

    if (email.length == 0){
        $("#emailCheck").append("<p class = 'err' style = 'font-size: 50%; color: red;' >Please input email</p>")
    }
    else if(email.indexOf('@') == -1){
        $("#emailCheck").append("<p class = 'err' style = 'font-size: 50%; color: red;' >Please input valid email</p>")
    }
   

    if (message.length > 400){
        $("#messageCheck").append("<p style = 'color: red;' >No more than 400 characters please</p>")
    }
    

    var userMessage = {
        name: name,
        email: email,   
        message: message
    }
    console.log(userMessage);


    storeMessage(userMessage);
   
})

function storeMessage(userMessage){
 
    $.post("/api/contacts", userMessage, function(){
        console.log("message received")
        
      })
  
}