// PROBELM: 
// we are working in a company build smart home thermometer.
// Our task is :
// 1. to Calculate the Temperature amplitude from the temperature array Given.
// 2. to find the maximum and minimum temperature from the array.
// 3. Ignore the sensor error 
// 4. to find the average temperature from the array.

// SOLUTION:
//  We will use the following steps to solve the problem :
// 1. First, we will define the temperature array and the sensor error.
// 2. Then we will calculate the temperature amplitude by finding the difference between the maximum and minimum
//    temperature from the array.
// 3. We will ignore the sensor error by checking if the temperature is within the valid rang
// 4. Finally, we will calculate the average temperature by summing up all the temperatures and
//    dividing by the total number of temperatures.





// 1.Calculate the min and max value of Temperature from the array:

const calculateMinMaxTemperature=(temperature)=>{
    let min=null
    let max=null
    for(let temp = 0; temp<temperature.length; temp++){
        if(typeof temperature[temp]!=="number") continue;
        if(min===null || temperature[temp]<min) min=temperature[temp];
        if(max===null || temperature[temp]>max) max=temperature[temp];
    }
    return [min,max];
}
// 2. Calculate the temperature amplitude from the array:
const calculateTemperatureAmplitude=(min,max)=>{
    return max-min;
}
// 3.Average of Temperature from the array :
const calculateAverageTemperature=(temperature)=>{
    let sum=0,count=0;
    let averageTemperature;
    for(let i = 0; i<temperature.length; i++){
        if(typeof temperature[i]!=="number") continue;
        count++;
        sum+=temperature[i];


    }
    return averageTemperature===0 ? null : sum/count;


}    

// EXECUTION: 
// Given :
const temperature=[3,-2,-6,-1,"error",9,13,17,15,14,9,5]
let [min,max]=calculateMinMaxTemperature(temperature);
let amplitude=calculateTemperatureAmplitude(min,max);
let averageTemperature=calculateAverageTemperature(temperature)

console.log(" Original Temperature Array : ",temperature);
console.log(" Maximum and Minimum Temperature : \n","Min : ",min ,"Max : ",max);
console.log(" Temperature Amplitude : ",amplitude);
console.log(" Average Temperature : ",averageTemperature);


