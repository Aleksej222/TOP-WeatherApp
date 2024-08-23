//** Return date format (Today 23 Aug.)   
export function setDateText(date) {
    // console.log(date);

    let dateText = ''

    let dayText = getDayOfTheWeek(date);
    let monthText = getMonth(date);

    let dateArr = date.split('-');
    let dateNr = dateArr.pop();

    dateText = dayText + ' ' + dateNr + ' ' + monthText;
    
    return dateText;

}

// ** Return day text
function getDayOfTheWeek(date) {
    let dayText = '';
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let todayTrue = false;

    let dateSent = new Date(date);
    let todaysDate = new Date();

    todayTrue = (dateSent.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0));
    
    if (todayTrue) {
        dayText = 'Today';

    } else {
        const dayOfWeekNr = dateSent.getDay();  
        dayText = daysArr[dayOfWeekNr];
    }

    return dayText;
}

// ** Return month text
function getMonth(date) {
    let monthText = '';
    const monthsArr = ["Jan.","Feb.","March","April","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];

    let todaysDate = new Date();
    let month = todaysDate.getMonth();

    monthText = monthsArr[month];

    return monthText;
}