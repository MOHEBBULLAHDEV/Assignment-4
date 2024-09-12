function calculateTax(income, expense) {
  if (income >= 0 && expense >= 0 && income > expense) {
    let remainingMoney = income - expense;
    let tax = (remainingMoney * 20) / 100;
    return tax;
  } else {
    return "Invalid Input";
  }
}



function  sendNotification(email){
  if (email.includes("@")) {
      // console.log("valid");
      let splitEmail = email.split("@");
      // console.log(x);
      let notificationMessage = " sent you an email from  ";
      let notification = splitEmail.join(notificationMessage)
      // console.log(notification);
      return notification;
      
  }else{
      return "Invalid Email";
  }

}



function checkDigitsInName(name) {
  if (typeof name === "string") {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = false;
    for (const digit of digits) {
      // console.log(digit);
      if (name.includes(digit)) {
        result = true;
      }
    }
    if (result === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}

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

