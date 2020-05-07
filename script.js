// Variables
var currentDay = moment().format('MMMM Do YYYY');
var tasks = [];

// Create Elements
$("#currentDay").text(currentDay);


// Timeblocks
for(i=9;i<=17; i++) {
    console.log(moment.utc(i*1000*3600).format('HH:mm'));
    tasks.push([moment.utc(i*1000*3600).format('HH:mm'),'']);
}
console.table(tasks);
for(i=0;i<tasks.length;i++) {
    var row = $("<div>").addClass("row");
    row.append(
        $("<div>").addClass("col-1 hour").append(
            $("<p>").text(tasks[i][0])));
    row.append($("<input>").addClass("col-10 future time-block textarea description").attr("value", tasks[i][1]));
    row.append($("<div>").addClass("col-1 saveBtn fas fa-save"));  
    $(".container").append(row);
}


// Local Storage

// Event Listener Section