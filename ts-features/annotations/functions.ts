const add = (a: number, b: number): number => {
  return a + b;
};

//arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

//named function
function divide(a: number, b: number): number {
  return a / b;
}

//anon function assigned to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // could also return:
  //return: null
  //return: undefined
};

//never going to complete the function
const throwError = (message: string): never => {
  throw new Error(message);
};

const maybeThrowError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// How to destructure
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
