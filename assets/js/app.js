$(document).ready(function () {

    const timezone = moment.tz.guess();
    const currentTime = moment().hour();

    console.log(currentTime);

    $("#current-date").text(moment().format('dddd[,] MMMM Do[,] YYYY'));
    $("#current-time").text(moment().tz(timezone).format('h[:]mm A z'));

    for (var i = 0; i < 24; i++) {
        let hourDay = "AM";
        let hour = i;
        let bgColor;

        if (i > 8 && i < 18) {
            console.log(i)
            if (i > 12) {
                hourDay = "PM";
                hour = i - 12;
            }

            if (currentTime > i) {
                bgColor = "past";
            } else if (currentTime == i) {
                bgColor = "current";
            } else {
                bgColor = "future";
            }

            const container = $("#container");
            const row = $("<div>").addClass("row")
            const hourCell = $("<div>").addClass("hour-cell col-1").text(hour + " " + hourDay);
            const textCell = $("<textarea>").addClass("text-cell col-10").attr("id", "block-" + i);
            textCell.addClass(bgColor);
            const saveCell = $("<div>").addClass("save-cell col-1 m-auto")
            const icon = $("<i>").addClass("fas fa-save fa-lg").attr("id", i);
            saveCell.append(icon);
            row.append(hourCell, textCell, saveCell)
            container.append(row);
        }
    }

});