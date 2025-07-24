// PROBELM:
// Given an araay of maximum forecasted temperatures, the thermommeter displays a string with these
// temperatures.
// Example :
// [17,21,23] will print -> "....17*C in 1 day ... 21*C in 2 days ... 23*C in 3 day..... "
// Task:
// Create a function name 'printForecast' which takes in an array 'arr' and logs the string like
// above shown.
// TEST CASES :
// DATA 1: [17,21,23]
// DATA 2: [12,5,-5,0,4]


// SOLUTION: 

const printForecast=(arr)=>{
    let str="";
    let i=0;
    while(i<arr.length){
        let Daystr= (i+1==1) ? "day" : "days";
        str+=`...${arr[i]}*C in ${i+1} ${Daystr} ...`
        i++;
    }
    console.log(str);
    
}
printForecast([17,21,23]);
printForecast([12,5,-5,0,4]);