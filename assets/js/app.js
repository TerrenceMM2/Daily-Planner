$(document).ready(function () {

    clearInterval(runningTime);

    const timezone = moment.tz.guess();
    const currentTime = moment().hour();

    const date = moment().format('dddd[,] MMMM Do[,] YYYY');

    $("#current-date").text(date);
    $("#current-time").text(moment().tz(timezone).format('h[:]mm:ss'));
    $("#current-timezone").text(moment().tz(timezone).format('A z[.]'));
    var runningTime = setInterval(() => {
        $("#current-time").text(moment().tz(timezone).format('h[:]mm:ss'));
        $("#current-timezone").text(moment().tz(timezone).format('A z[.]'));
    }, 1000)


    for (var i = 0; i < 24; i++) {
        let hourDay = "AM";
        let hour = i;
        let bgColor;
        let boolean = true;
        let savedText;

        if (i > 8 && i < 18) {
            if (i == 12) {
                hourDay = "PM";
            }
            else if (i > 12) {
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

            if (localStorage.getItem("planner-" + i) !== null) {
                let savedEntry = JSON.parse(localStorage.getItem("planner-" + i));
                if (savedEntry.creationDate === date) {
                    savedText = savedEntry.textVal;
                }
            }

            const container = $("#container");
            const row = $("<div>").addClass("row")
            const hourCell = $("<div>").addClass("hour-cell col-1").text(hour + " " + hourDay);
            const textCell = $("<textarea>").addClass("text-cell col-10").attr({"id": "text-" + i, "disabled": boolean}).text(savedText);
            textCell.addClass(bgColor);
            let saveCell = "";
            let icon = "";
            if (boolean) {
                saveCell = $("<div>").addClass("save-cell-disabled col-1");
                icon = $("<i>").addClass("fas fa-save fa-lg").attr("id", i).addClass("save-icon-disabled");
            } else {
                saveCell = $("<div>").addClass("save-cell col-1");
                icon = $("<i>").addClass("fas fa-save fa-lg").attr("id", i).addClass("save-icon");
            }
            saveCell.append(icon);
            row.append(hourCell, textCell, saveCell)
            container.append(row);
        }
    }

    $(".save-cell > i").on("click", function() {
        var textCell = "#text-" + this.id;
        let textVal = $(textCell).val();
        localStorage.setItem("planner-" + this.id, JSON.stringify({
            creationDate: date,
            textCell, textVal
        }))
        $('.toast').toast("show");
    })

});