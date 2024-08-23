//** Return date format (Today 23 Aug.)   
export function setDateText(date) {
    // console.log(date);

    let dateText = ''
    // let dateArr = date.split('-');
    // dateArr.shift();  // Remove year from the array

    let dayText = getDayOfTheWeek(date);
    let monthText = getMonth(date);

    dateText = dayText + ' ' + monthText;
    
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


function getMonth(date) {
    let monthText = '';
    const month = ["Jan.","Feb.","March","April","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];

    

    return monthText;
}

// TODO: If todayTrue set Today instead of 'Monday'