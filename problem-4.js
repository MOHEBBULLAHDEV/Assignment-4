const scoringCriteria = {
  name: "mohbebbulah",
  testScore: 15,
  schoolGrade: 15,
  parentProfessionIsFarmer: true,
};
function calculateFinalScore(scores) {
  let finalScore = 0;
  if (typeof scores === "object") {
    if (
      scores.testScore <= 50 &&
      scores.schoolGrade <= 30 &&
      scores.parentProfessionIsFarmer === true
    ) {
      finalScore = scores.testScore + scores.schoolGrade + 20;
    }
    if (finalScore >= 80) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}



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
