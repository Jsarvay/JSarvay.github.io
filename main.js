$(document).ready(function() {
    //Allows for buttons to populate page with different portfolio contents
    $("#rvaVen").on("click", function(){
        $(".web-thumb").attr("src", "./images/rvavenues.png");
        $(".port-link").attr("href", "https://nickelme.github.io/RVAVenues/");
        $(".port-head").text("RVA Venues");
        $(".port-git").attr("href", "https://github.com/Nickelme/RVAVenues");
        $(".port-desc").text("An app that is a collaborative project that allows for users to search for a song through Spotify and receive recommendations for local RVA venues that match that song's style!")

    });

    $("#weatherApp").on("click", function(){
        $(".web-thumb").attr("src", "./images/weather.png");
        $(".port-link").attr("href", "https://jsarvay.github.io/weather-app/");
        $(".port-head").text("Sarvay's Weather App");
        $(".port-git").attr("href", "https://github.com/Jsarvay/weather-app");
        $(".port-desc").text("An app designed with the openweathermap API to pull various weather forecasts!")
    });

    $("#codeQuiz").on("click", function(){
        $(".web-thumb").attr("src", "./images/code.png");
        $(".port-link").attr("href", "https://jsarvay.github.io/coding_quiz/");
        $(".port-head").text("Coding Quiz");
        $(".port-git").attr("href", "https://github.com/Jsarvay/coding_quiz");
        $(".port-desc").text("An app that allows students to answer basic coding questions and be scored!")
    });

    $("#burgerApp").on("click", function(){
        $(".web-thumb").attr("src", "./images/devour.png");
        $(".port-link").attr("href", "http://sarvay-burger.herokuapp.com/");
        $(".port-head").text("Burger App");
        $(".port-git").attr("href", "https://github.com/Jsarvay/burger");
        $(".port-desc").text("An MVC app that allows users to enter burgers and add them to a database and then edit their database properties all in one page.")
    });

    $("#togetherAgainst").on("click", function(){
        $(".web-thumb").attr("src", "./images/together.png");
        $(".port-link").attr("href", "https://leopard-ta.herokuapp.com/");
        $(".port-head").text("Together Against");
        $(".port-git").attr("href", "https://github.com/Bertodemus/LeopardLightning");
        $(".port-desc").text("A full stack web app worked on in collaboration with other developers that allows users to create virtual events and create a space for dialogue and voting on the outcome of created events.")
    });
});