const kelvinToFahrenheit = (kelvin) => {
  console.log(`Below is the output of the kelvinToFahrenheit function:\n`);
  // Here we are converting the current constant Kelvin value to Celsius
  const celsius = kelvin - 273;
  // Here we are converting the Celsius value to Fahrenheit
  fahrenheit = celsius * (9 / 5) + 32;
  // The below  line of code rounds Fahrenheit variable output
  fahrenheit = Math.floor(fahrenheit);
  // The below  line of code
  console.log(`The TEMPERATURE is ${fahrenheit} degrees Fahrenheit.`);
};
/****************************************** */
const humanAgeInDogYears = (myAge) => {
  console.log(`\nBelow is the output of the humanAgeInDogYears function:\n`);
  // The below variable will be used latter
  let earlyYears = 2;
  // The below variable is a conversion of the first two years of a dog’s life
  earlyYears = earlyYears * 10.5;
  // later Years variable
  let laterYears = myAge - 2;
  // number of dog years converted to my years
  laterYears = laterYears * 4;
  console.log(
    "Early dog Years are " + earlyYears + "\r Later dog Years are " + laterYears
  );
  // The below variable is a conversion man years into dogs years
  myAgeInDogYears = earlyYears + laterYears;

  let myName = "Vasile";
  // The below method writes my name in lowercase
  console.log("my Name displayed in lowercase: " + myName.toLowerCase());
  // The below line of code displays the conversion of my ears converted to dog years
  console.log(
    "My name is " +
      myName +
      ". I am " +
      myAge +
      " years old in human years which is " +
      myAgeInDogYears +
      " years old in dog years"
  );
};
/****************************************** */
const answerMyQuestion = (userName, userQuestion) => {
  console.log(`\nBelow is the output of the answerMyQuestion function:\n`);
  // ternary expression that checks if userName is not empty
  userName !== null ? console.log(`Hello, ${userName}`) : console.log("Hello!");

  console.log(`${userName} asked: ${userQuestion}`);

  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "";

  // decision block that validates randomNumber value and assigns eightBall value depending on the randomNumber
  if (randomNumber === 0) {
    eightBall = "It is certain";
  } else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
  } else if (randomNumber === 2) {
    eightBall = "Reply hazy try again";
  } else if (randomNumber === 3) {
    eightBall = "Cannot predict now";
  } else if (randomNumber === 4) {
    eightBall = "Do not count on it";
  } else if (randomNumber === 5) {
    eightBall = "My sources say no";
  } else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
  } else if (randomNumber === 7) {
    eightBall = "Signs point to yes";
  }

  console.log(eightBall);
};
/****************************************** */
const raceTime = (userAge, registeredEarly) => {
  console.log(`\nBelow is the output of the raceTime function:\n`);
  // Race numbers generation
  let raceNumber = Math.floor(Math.random() * 1000);

  // decision block that validates whether the runner is an adult AND registered early.
  if (userAge >= 18 && registeredEarly == true) {
    raceNumber = raceNumber + 1000;
  }
  // decision block that check age and registration time to determine race time.
  if (userAge >= 18 && registeredEarly == true) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
  } else if (userAge >= 18 && registeredEarly == false) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
  } else if (userAge < 18) {
    console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`);
  }
};
/****************************************** */
kelvinToFahrenheit(289);
humanAgeInDogYears(31);
answerMyQuestion(
  "Vasile",
  "Will I be able to complete the BooGeek web development course?"
);
raceTime(17, true);
raceTime(20, true);
raceTime(20, false);
