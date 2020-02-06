$(document).ready(function() {

    const timezone = moment.tz.guess();

    $("#current-date").text(moment().format('dddd[,] MMMM Do[,] YYYY'));
    $("#current-time").text(moment().tz(timezone).format('h[:]mm A z'));

    const hourBlock = function(num) {
        for (var i = 0; i < num; i++) {

            let hourDay = "AM";
            let hour = i;

            if (i > 3) {
                hourDay = "PM";
                hour = i - 12;
            }

            const container = $("#container");
            const row = $("<div>").addClass("row")
            const hourCell = $("<div>").addClass("hour-cell col-1").text((hour + 9) + " " + hourDay);
            const dataCell = $("<div>").addClass("text-cell col-10").attr("id", "block-" + i).text("This is a test.\n This is a test.");
            const saveCell = $("<div>").addClass("save-cell col-1").html('<i class="fas fa-save"></i>');
            row.append(hourCell, dataCell, saveCell)
            container.append(row);

        }
    }

    hourBlock(9);

});