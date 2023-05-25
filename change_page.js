$(function() {
  // Handle navigation link clicks
  $(".nav-link").click(function(e) {
    e.preventDefault();
    var contentId = $(this).data("content");

    // Remove active class from all window contents
    $(".window-content").removeClass("active");

    // Add active class to the corresponding window content
    $("#" + contentId).addClass("active");
  });
});

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Format the time with leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display the formatted time in the HTML element
  var timeElement = document.getElementById("current-time");
  timeElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Update the time every second
setInterval(updateTime, 1000);