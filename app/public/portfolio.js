$(".pPage").on({
    mouseenter: function () {
        var project = $(this).attr("id");

    //modify this to database instead

    switch (project){
        case "project1":
            $(".wrapper").css("background-image", "url('https://media.istockphoto.com/photos/food-background-with-ingredients-for-pasta-picture-id1051181538')");
            break;
        case "rpg":
            $(".wrapper").css("background-image", "url('https://raw.githubusercontent.com/homemadechowder/Star_Wars_RPG/master/assets/images/background.jpg')");
            break;
        case "giftas":
            $(".wrapper").css("background-image", "url('https://media.istockphoto.com/photos/food-background-with-ingredients-for-pasta-picture-id1051181538')");
            break;
        case "zombie":
            $(".wrapper").css("background-image", "url('https://image.freepik.com/free-photo/3d-halloween-background-with-zombie-landscape_1048-11065.jpg')");
            break;
        case "nytsearch":
            $(".wrapper").css("background-image", "url('https://crownlibrary.files.wordpress.com/2013/09/scan.jpg')");
            break;
        case "timedquiz":
            $(".wrapper").css("background-image", "url('https://raw.githubusercontent.com/homemadechowder/Basic_Quiz-Timed-/master/assets/images/abzu.jpg')");
            break;
        case "embed":
            $(".wrapper").css("background-image", "url('https://tufts-admissions.s3.amazonaws.com/files/dogwood/posts/9148027-electrical-engineering-as-a-background-art.jpg')");
            break;
        case "shallow":
            $(".wrapper").css("background-image", "url('https://tufts-admissions.s3.amazonaws.com/files/dogwood/posts/9148027-electrical-engineering-as-a-background-art.jpg')");
            break;
        case "liri":
            $(".wrapper").css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdDFdNJYOkCLh8hBb_GfvEaoUSLgmRuiFi1gpsxv7HqEyI9hia')");
            break;
        case "project2":
            $(".wrapper").css("background-image", "url('https://raw.githubusercontent.com/littlefish-tech/Team-Project-2/master/app/public/img/1.jpg')");
            break;
        }
    },
    mouseleave: function () {
        var project = $(this).attr("id");

        //modify this to database instead
    
        $(".wrapper").css("background-image", "url()");
        $(".wrapper").css("background-color", "white")
    }
});
        
$(document).on("click", ".pPage", function(){
        
    var project = $(this).attr("id");

    //modify this to database instead

    switch (project){
        case "project1":
            window.open("https://homemadechowder.github.io/Project1/", "_blank");
            break;
        case "rpg":
            window.open("https://homemadechowder.github.io/Star_Wars_RPG/", "_blank");
            break;
        case "giftas":
            window.open("https://homemadechowder.github.io/GifTastic/","_blank");
            break;
        case "zombie":
            window.open("https://github.com/homemadechowder/Zombie-JS/blob/master/zombiegame.js","_blank");
            break;
        case "nytsearch":
            window.open("https://homemadechowder.github.io/NYTSearch/","_blank");
            break;
        case "timedquiz":
            window.open("https://homemadechowder.github.io/Basic_Quiz-Timed-/","_blank");
            break;
        case "embed":
            window.open("https://github.com/homemadechowder/Embedded-Interactive-Module-with-AWS","_blank");
            break;
        case "shallow":
            window.open("https://github.com/homemadechowder/ShallowWaterSimulations","_blank");
            break;
        case "liri":
            window.open("https://github.com/homemadechowder/LIRI");
            break;
        case "project2":
            window.open("https://tranquil-forest-89219.herokuapp.com/");
            break;
        }

});