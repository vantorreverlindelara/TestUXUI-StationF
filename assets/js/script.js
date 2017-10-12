function getRooms() {
  console.log("geklikt");

  $.ajax({
    url: "/Users/laravantorre/Documents/GitHub/TestUXUI-StationF/rooms.json",
    dataType: "json"
  }).done(function(data) {
    showRooms(data);
  });
}


function showRooms(data) {

  var $section = $("section");
  var htmlString = "";

  $.each(data, function(idObjectInArray, objectInArray) { //hier gaat hij zo in elke array
    htmlString += "<article data-id='" + data[0].name + "'>";
    htmlString += "<ul>";
    for (property in data[0]) {
      htmlString += "<li>" + property + ": ";
      var obj = objectInArray[property];
    }
    htmlString += "</ul>";


    // htmlString += `<button type="button" ... ${tableName}`;

    htmlString += "<button type='button' data-toggle='modal' data-target='#myModal' data-table='" + tableName + "' data-id='" + data[0].id + "' class='btn btn-default' id='update'><span class='glyphicon glyphicon-refresh'></span></button><br/>";
    htmlString += "<button type='button' data-table='" + tableName + "' data-id='" + data[0].id + "' class='btn btn-default' id='delete'><span class='glyphicon glyphicon-trash'></span></button><br/>";
    htmlString += "<button type='button' data-toggle='modal' data-target='#myModal' data-table='" + tableName + "' data-id='" + data[0].id + "' class='btn btn-default' id='create'><span class='glyphicon glyphicon-plus'></span></button><br/>";
    htmlString += "<hr class='section-heading-spacer'><br/>";
    htmlString += "<div class='clearfix'></div>";
    htmlString += "</article>";
  });

  toverContainer.insertAdjacentHTML('beforeend', htmlString);
}



$(function() {
  console.log("We zijn vertrokken en al lang...");
  $("nav ul li:first-child").on('click', getRooms);
});
