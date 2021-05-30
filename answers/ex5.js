//That logs “The current date and time is “ - the current date and time  (Function Declaration)
function displayDate() {
  let todayD = new Date().toLocaleString();
  console.log(`The current date and time is  ${todayD} `);
}
displayDate();

//That prints “I’m ready” after 5 seconds. (Anonymous function)
let setMsg = function () {
  console.log("I'm ready");
};
setTimeout(setMsg, 5000);

//To convert today’s temperature from Celsius to Fahrenheit (Arrow function)
let todayCTemp = 25;
const checkTemp = () => {
  let todayFTemp = (todayCTemp * 9) / 5 + 32;
  console.log(todayFTemp + " degrees Farenheit");
};
checkTemp();
