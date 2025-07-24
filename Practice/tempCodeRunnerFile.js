// PROBLEM:
/*
 Let's say you are building s time tracking application for 
 freelancers.At some point of time in building this app,
 you need  that receives daily work hours for a certain
 week, and returns:
   1. Total hours worked
   2. Average daily hours worked
   3. The day with most hours worked
   4. Number of days worked
   5. Whether the week was full time (35 hours or more)



TEST DATA : [7.5, 8, 6.5, 0, 8.5, 4, 0]


STEPS TO SOLVE THIS QUESTION:
 1. Initialize all the variables with the given data
 2. Calculate total hours worked by summing up all the hours
 3. Calculate average daily hours worked by dividing total hours by 7
 4. Find the day with most hours worked by using max function with key
 5. Count the number of days worked by counting the number of non-zero hours
 6. Check if the week was full time by checking if total hours is greater than or equal
 to 35



 SOLUTION:
*/


const dailyHours=[7.5, 8, 6.5, 0, 8.5, 10, 0]

const TimeTracker=(dailyHours)=>{
    //  Variable declaration
    let averageWorkingHours;
    let full_time=false;
    // The days:
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

    // Total hours worked in a week
    let totalHours=dailyHours.reduce((a,b)=>a+b,0);

    // Calculate Average daily hours worked
    averageWorkingHours=(totalHours)/(dailyHours.length)


    // The day with most hours worked
    let maxHours=dailyHours.reduce((a,b)=>a>b || a===b ? a : b,0);

    let day=days[dailyHours.indexOf(maxHours)];


    // Number of days worked
    let daysWorked=dailyHours.filter(hour=>hour>0).length

    // Check if the week was full time
    full_time=totalHours>=35;

    return {
        totalHours,
        averageWorkingHours,
        full_time,
        day,
        daysWorked
    }

}
console.log(TimeTracker(dailyHours));

