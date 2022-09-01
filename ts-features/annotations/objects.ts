const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructure variable
const { age }: { age: number } = profile;

// Destructure object
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
