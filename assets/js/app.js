$(document).ready(function() {

    const timezone = moment.tz.guess();
    const workHours = 10;

    $("#current-date").text(moment().format('dddd[,] MMMM Do[,] YYYY'));
    $("#current-time").text(moment().tz(timezone).format('h[:]mm A z'));

    const hourBlock = function(num) {
        for (var i = 0; i < num; i++) {

        }
    }

});