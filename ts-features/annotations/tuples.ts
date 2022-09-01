// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//type alias
type Drink = [string, boolean, number];
// tuple can be declared direct as below or as a type alias
//const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

// Hard to deduce meaning of each value
const carSpecs: [number, number] = [400, 3345];
// Easier with objects
const carStats = {
  horsepower: 400,
  weight: 3354,
};
