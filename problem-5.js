const isratSerialNumber = 10;
const interviewTime = [3, 5, 7, 11, 6 ];
function waitingTime(minutes ,serialNumber){
    let totalMinute = 0;
    if (Array.isArray(minutes) && Number.isInteger(serialNumber)) {
        for(const  minute of minutes){
            totalMinute += minute;
        }
        let averageInterviewTime =  Math.round( totalMinute / minutes.length );
        let waitingTime = [(serialNumber -1) - minutes.length] * averageInterviewTime;
        return waitingTime;
        
    }else{
        return "Invalid Input";
    }
    
}

// console.log(waitingTime(interviewTime, isratSerialNumber));
console.log(waitingTime(10, "10"));