$(document).ready(function() {
  let clock;

  // Target start date/24 hour time/Timezone
  let startDate = moment.tz("2023-11-02 00:00", "Africa/Tunis");

  // Grab the current date
  let currentDate = moment();

  // Calculate the difference in seconds between the current date and the start date
  let diff = currentDate.diff(startDate, 'seconds');

  // Run count-up timer
  clock = $(".clock").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: false,
    autoStart: true,
    callbacks: {
      stop: function() {
        console.log("Timer has ended!");
      }
    }
  });
});
