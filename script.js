$(document).ready(function() {
    // displays the current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // jQuery action to listen for the user to click the save button
    $(".saveBtn").on("click", function() {
      // grabs the users input
      var value = $(this).siblings(".description").val();
      // grabs the id of the container with the users input   
      var time = $(this).parent().attr("id");
  
      // saves input in localStorage
      localStorage.setItem(time, value);
    });
  
    // function to update the current time and change the css based on current time
    function hourUpdater() {
      // grabs the current time
      var currentHour = moment().hours();
  
      // cycles through the time blocks and adjusts the css
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
  
    // loads any data saved to local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
  });