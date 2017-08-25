$(document).ready(function() {

// write your code here

    $.getJSON("data.json", function(data){
        
        var tableElement = $("#topSpotsTable");

        for (var i = 0; i < data.length; i += 1){

            var topSpot = data[i];

            var rowElement = $("<tr></tr>");

            var nameElement = $("<td class='h4'>" + topSpot.name + "</td>");

            var descriptionElement = $("<td class='lead'>" + topSpot.description + "</td>");

            var locationElement = $("<td><a class='btn btn-primary' target='_blank' href='https://www.google.com/maps?q=" + topSpot.location + "'>Open in Maps</a></td>");

            rowElement.append(nameElement);

            rowElement.append(descriptionElement);

            rowElement.append(locationElement);

            tableElement.append(rowElement);

            $("tr:even").css("background-color", "#e1fdf5");

            $("tr:odd").css("background-color", "#ffffff");
          
        }

    });

});
