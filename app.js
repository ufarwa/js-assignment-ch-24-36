//chpater 26 to 30
// =======================Q1=======================
// let userInput = +prompt("enter a number")
// document.write("number: "+userInput + "<br>")
// document.write("round off: "+Math.round(userInput) + "<br>")
// document.write("ceil value: "+Math.ceil(userInput) +"<br>")
// document.write("floor value: "+Math.floor(userInput)+"<br>")


// ==========================Q2===============
// let userInput = +prompt("enter a negative number")
// document.write("number: "+userInput + "<br>")
// document.write("round off: "+Math.round(userInput) + "<br>")
// document.write("ceil value: "+Math.ceil(userInput) +"<br>")
// document.write("floor value: "+Math.floor(userInput)+"<br>")

// ========================Q3=======================
// let absolutValue = + prompt("enter a number a number")
// document.write("The absolute value of " +absolutValue + " is "+Math.abs(absolutValue))

// ===========================Q4=======================
// let randomeNum = Math.random()
// document.write("randome dice value is: "+ (Math.floor(randomeNum*6)+1))

// ===========================Q5=========================
// let tossValue=(Math.floor(Math.random()*2)+1)
// if(tossValue%2===0){
//     document.write("random coin value: Heads")
// }
// else{
//     document.write("random coin value: Tail")
// }
//  ===========================Q6=======================

// let randomeNum=(Math.floor(Math.random()*100)+1)
// document.write("The random number between 1 and 100: "+randomeNum)

// ================================Q8=====================
// let secretNumber = (Math.floor(Math.random()*10)+1)
// let userNumber = +prompt("enter a number")

//     if(userNumber==secretNumber){
//         document.write("congratulations")
//     }
//     else{
//         document.write("try Again")
//     }

// ================================ch# 31-32=====================
// =======================Q1=========================
// Write a program that displays current date and time in
// your browser.
// let currentDate = new Date()
// document.write(currentDate)

// =======================Q2=========================
// let currentDate = new Date()
// let monthNames = ["january","February","March","April","May","June","July","August","september","October","November","December"]
// document.write("The current month is "+monthNames[currentDate.getMonth()+1])

// =======================Q3=========================
// let currentDate = new Date()
// let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// let dayIs = week[currentDate.getDay()]
// let shortForm = dayIs.slice(0,3)
// document.write("Today is "+shortForm)

// =======================Q4=========================
// let currentDate = new Date()
// let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// let dayIs = week[currentDate.getDay()]
// if(dayIs==="Sunday" || dayIs==="Saturday"){
//     document.write("It is a fun day")
// }
// else{
//     document.write("It is a working day")
// }

// =======================Q5=========================
// let currentDate = new Date()
// let date = currentDate.getDate()
// // document.write(date)
// if(date<16){
//     document.write("First fifteen days of Month")
// }
// else{
//     document.write("last days of Month")

// }
// =======================Q6=========================
// let currentDate = new Date()
// document.write("Current Date: "+ currentDate + "<br>")
// let referenceDateTime = new Date(1970, 0, 1, 0, 0, 0)
// let timeDifference = currentDate - referenceDateTime
// let minutesSinceMidnight1970 = Math.floor(timeDifference / (1000 * 60))
// let millisecondsSinceMidnight1970 = Math.floor(timeDifference / 1000) * 60 * 1000;
// document.write("Elapsed minutes since january 1,1970: "+ minutesSinceMidnight1970+ "<br>")
// document.write("Elpsed milliseconds since january 1, 1970: "+ millisecondsSinceMidnight1970 + "<br>")

// =======================Q7=========================
// let currentTime = new Date()
// let time = currentTime.getTime()
// if(time>=12){
//     document.write("Its PM")
// }
// else {
//     document.write("Its AM")
// }

// =======================Q8=========================
// let currentDate = new Date()
// let lastDayOfDec2022 = new Date(2022, 11, 31, 0, 0, 0)
// document.write("Later date: " +lastDayOfDec2022)

// =======================Q9=========================
// let currentDate = new Date()
// let dateOnFirstRamadan = new Date(2015, 5, 18, 0, 0, 0)
// let totalDays = (currentDate -dateOnFirstRamadan)/(1000 * 60 * 60 * 24)
// document.write(Math.floor(totalDays)+" days has passed since 1<sup>st</sup> Ramdan 2015")

// =======================Q10=========================
// let currentDate = new Date();
// let referenceDate = new Date(2015, 11, 5, 0, 0, 0);
// const timeDifferenceInSeconds = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
// document.write("On the reference date " + referenceDate + ", " + timeDifferenceInSeconds + " seconds have passed.");

// =======================Q11=========================
// let currentDate = new Date();
// let DateBefore1Hour = new Date()
// DateBefore1Hour.setFullYear(currentDate.getFullYear()-1)
// document.write("current date: " + currentDate + "<br>Date before 1 hour was :"+ DateBefore1Hour);

// =======================Q12=========================
// var currentDate = new Date();
// var resetDate = new Date();
// resetDate.setFullYear(currentDate.getFullYear() - 100);
// alert("current date is: "+ currentDate +" 100 year back it was " + resetDate);

// =======================Q13=========================
// let userAge = + prompt("enter your age")
// let currentDate = new Date()
// currentDate=currentDate.getFullYear()
// let userBirthYear= currentDate - userAge
// document.write("your age: " + userAge + " <br>Your Birth Year: " + userBirthYear)


// =======================Q14=========================
// let customerName = "Latif"
// let Month = "July"
// let NumberOfUnits= 430
// let ChargesPerunit =16
// let latePaymentSurcharge= 350
// let NetAmountPayable = NumberOfUnits * ChargesPerunit
// let GrossAmountPayable  = NetAmountPayable + latePaymentSurcharge
// document.write("<h1>K-Electric Bill</h1><br><br>")
// document.write("CustomerName: "+ customerName +"<br>")
// document.write("Month: "+ Month+"<br>")
// document.write("Number of Units: "+ NumberOfUnits+"<br>")
// document.write("charges per unit: "+ ChargesPerunit + "<br><br>")
// document.write("Net Amount Payable Within Due Date: "+ NetAmountPayable+"<br>")
// document.write("late payment surc harge: "+ latePaymentSurcharge+"<br>")
// document.write("Gross Amount Payable: "+ GrossAmountPayable+"<br>")

