/* Author: Jammers Team */

function getUserLocation() { 
        //check if the geolocation object is supported, if so get position
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        else
            document.getElementById("locationData").innerHTML = "Sorry - your browser doesn't support geolocation!";
        }

        //Position of car
        function displayLocation(position) { 
        //build text string including co-ordinate data passed in parameter
        var displayText = "Car latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;
        initialLatitude = position.coords.latitude;
        initialLongitude = position.coords.longitude; 


        //display the string for demonstration
        document.getElementById("locationData").innerHTML = displayText;
        }

        function displayActualLocation(){
        
        navigator.geolocation.getCurrentPosition(displayUserLocation, displayError);
        
        }

        function displayUserLocation(position){

        var displayText = "User latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;
        finalLatitude = position.coords.latitude;
        finalLongitude = position.coords.longitude; 

        //display the string for demonstration
        document.getElementById("UlocationData").innerHTML = displayText;
        calculateDistance();

        } 

        function displayError(error) { 

        //get a reference to the HTML element for writing result
        var locationElement = document.getElementById("locationData");

        //find out which error we have, output message accordingly
        switch(error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "Permission was denied";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location data not available";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "Location request timeout";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unspecified error occurred";
            break;
        default:
            locationElement.innerHTML = "Who knows what happened...";
            break;
        }}

        function calculateDistance()
        {
            //var distance = Math.sqrt( Math.pow( Math.abs(finalLatitude) - Math.abs(initialLatitude) , 2) + Math.pow( Math.abs(finalLongitude) - Math.abs(initialLongitude) ) );
            
            var distance = (Math.sqrt(Math.pow( Math.abs(finalLatitude) - Math.abs(initialLatitude) , 2) + Math.pow( Math.abs(finalLongitude) - Math.abs(initialLongitude) , 2) ));
                        
            document.getElementById("UlocationData").innerHTML += " Distancia: " + distance;
        }


$(document).ready(function(){

    /*
     * Variables
     */

    var btauto = $("#btauto");
    var btuser = $("#btuser");
    var btpremio = $("#btpremio");
    var auto = $("#miauto");
    var user = $("#user");
    var premiobb = $("#premiobb");
    var premiorb = $("#premiorb");
    var verpremios = $("#verpremios");
    var premio = $(".premio");
    

    btauto.click(function(e){
        auto.attr("class","mostrar");
        verpremios.attr("class","mostrar");
        btpremio.attr("class","mostrar");
        e.preventDefault();
        return false;
    });

    btuser.click(function(e){
        user.attr("class","mostrar");
        e.preventDefault();
        return false;
    });

    btpremio.click(function(e){
        premiorb.attr("class","mostrar");
        e.preventDefault();
        return false;
    });

    premiorb.click(function(e){
        $(this).attr("class","inioculto");
        e.preventDefault();
        return false;
    });

}); //fin jquery