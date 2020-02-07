$(document).ready(function () {

    const timezone = moment.tz.guess();
    const currentTime = moment().hour();

    $("#current-date").text(moment().format('dddd[,] MMMM Do[,] YYYY'));
    $("#current-time").text(moment().tz(timezone).format('h[:]mm A z'));

    for (var i = 0; i < 24; i++) {
        let hourDay = "AM";
        let hour = i;
        let bgColor;
        let boolean = true;

        if (i > 8 && i < 18) {
            if (i > 12) {
                hourDay = "PM";
                hour = i - 12;
            }

            if (currentTime > i) {
                bgColor = "past";
                boolean = true;
            } else if (currentTime == i) {
                bgColor = "current";
                boolean = false;
            } else {
                bgColor = "future";
                boolean = false
            }

            const container = $("#container");
            const row = $("<div>").addClass("row")
            const hourCell = $("<div>").addClass("hour-cell col-1").text(hour + " " + hourDay);
            const textCell = $("<textarea>").addClass("text-cell col-10").attr({"id": "text-" + i, "disabled": boolean});
            textCell.addClass(bgColor);
            const saveCell = $("<div>").addClass("save-cell col-1 m-auto")
            const icon = $("<i>").addClass("fas fa-save fa-lg").attr("id", i);
            saveCell.append(icon);
            row.append(hourCell, textCell, saveCell)
            container.append(row);
        }
    }

    $(".save-cell > i").on("click", function() {
        var textCell = "#text-" + this.id;
        let textVal = $(textCell).val();
        console.log(textVal);
    })

});