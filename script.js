// Variables
var currentDay = moment().format('MMMM Do YYYY');
var tasks = [];


// Create Elements
$("#currentDay").text(currentDay);


// Timeblocks
if(localStorage.getItem("timeBlock") === null){
    for(i=9;i<=17; i++) {
        console.log(moment.utc(i*1000*3600).format('HH:mm'));
        tasks.push([moment.utc(i*1000*3600).format('HH:mm'),'']);
    }
}
else{
    tasks = JSON.parse(localStorage.getItem("timeBlock"));
}
console.table(tasks);

for(i=0;i<tasks.length;i++) {
    var row = $("<div>").addClass("row");
    row.append(
        $("<div>").addClass("col-1 hour").append(
            $("<p>").text(tasks[i][0])));
    row.append($("<input>").addClass("col-10 future time-block textarea description").attr("value", tasks[i][1]).attr("data-index", i));
    row.append($("<div>").addClass("col-1 saveBtn fas fa-save").attr("data-index", i));  
    $(".container").append(row);
}


// Local Storage

// Event Listener Section
$(".saveBtn").on("click", function(){
    var index = $(this).attr("data-index");
    var contents = $('.textarea[data-index="'+index+'"]').val();
    tasks[index][1] = contents;
    console.table(tasks)
    localStorage.setItem("timeBlock", JSON.stringify(tasks));
})
