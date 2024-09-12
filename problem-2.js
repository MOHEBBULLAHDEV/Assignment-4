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
console.log(sendNotification("zihad@gmail.com"));