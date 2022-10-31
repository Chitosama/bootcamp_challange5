//Scheduler process
$(document).ready(function(){
    //setting for buttons
    $('.saveBtn').on('click', function(){
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        //save submited info
        localStorage.setItem(time, value);

        //notification for successful save
        $('.notification').addClass('display');

        //limit total time for disply notification
        setTimeout(function(){
            $('.notification').removeClass('display');},5000);
        })

// get current time and display specific rows
function updateTimeRows() {
var curHour = moment().hours();

//Go through each class time-block
$('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    console.log(blockHour)
//set class to check if we should display
    if (blockHour < curHour){
        $(this).addClass()('past');
    }
    else if (blockHour === curHour){
        $(this).removeClass('past');
        $(this).addClass('present');
    }
    else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});
}

updateTimeRows();

//check current time and update rows as required
var timeLapse = setInterval(updateTimeRows, 17500);

//Current Date on scheduler
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//Load localStorage data

$('#time-9 .description').val(localStorage.getItem('time-9'));
$('#time-10 .description').val(localStorage.getItem('time-10'));
$('#time-11 .description').val(localStorage.getItem('time-11'));
$('#time-12 .description').val(localStorage.getItem('time-12'));
$('#time-13 .description').val(localStorage.getItem('time-13'));
$('#time-14 .description').val(localStorage.getItem('time-14'));
$('#time-15 .description').val(localStorage.getItem('time-15'));
$('#time-16 .description').val(localStorage.getItem('time-16'));
$('#time-17 .description').val(localStorage.getItem('time-17'));

});