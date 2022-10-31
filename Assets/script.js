// get current time
function updateTimeRows(){
var curHour = moment().hours();

$(.time-block).each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
})
}