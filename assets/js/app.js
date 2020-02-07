$(document).ready(function() {

    const timezone = moment.tz.guess();

    $("#current-date").text(moment().format('dddd[,] MMMM Do[,] YYYY'));
    $("#current-time").text(moment().tz(timezone).format('h[:]mm A z'));

    $("#container").on("click", "i", function(event){ 
        let id = event.target.id;
        saveBlock(id);
    });

    const hourBlock = (num) => {
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
            const textCell = $("<textarea>").addClass("text-cell col-10").attr("id", "block-" + i);
            const saveCell = $("<div>").addClass("save-cell col-1 m-auto")
            const icon = $("<i>").addClass("fas fa-save fa-lg").attr("id", i);
            saveCell.append(icon);
            row.append(hourCell, textCell, saveCell)
            container.append(row);
        }
    }

    const saveBlock = (num) => {
        let blockRef = "#block-" + num;
        let block = $(blockRef).text();
        console.log(block);
    }

    hourBlock(9);

});