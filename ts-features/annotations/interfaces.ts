// How to use TS interfaces for code reuse
// Functions should as often as possible accept arguments that are typed with interfaces
// Objects/classes can decide to 'implement' a given interface to work with a function

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const fizzDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
};

printSummary(oldCivic);
printSummary(fizzDrink);
