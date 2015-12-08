$(document).ready(function() {

  var endTime = new Date('December 18, 2015 17:00:00');

  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var displayRemaining = function() {
    var currentTime = new Date();

    var remainingTime = endTime - currentTime;

    if (remainingTime < 0) {
      $('#days').html(0);
      $('#hours').html(0);
      $('#minutes').html(0);
      $('#seconds').html(0);
      return;
    } else {
      var remainingDays = Math.floor(remainingTime / day);
      var remainingHours = Math.floor((remainingTime % day) / hour);
      var remainingMinutes = Math.floor((remainingTime % hour) / minute);
      var remainingSeconds = Math.floor((remainingTime % minute) / second);

      $('#days').html(remainingDays);
      $('#hours').html(remainingHours);
      $('#minutes').html(remainingMinutes);
      $('#seconds').html(remainingSeconds);
    };
  };

  setInterval(displayRemaining, 1000);

});
