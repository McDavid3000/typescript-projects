class Vehicle {
  // Add accessability modifier to constructor argument as
  // Alternative to declaring field
  //color: string;

  constructor(public color: string) {
    //  this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehcile = new Vehicle('orange');
console.log(vehcile.color);

class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // Overide 'drive' method
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Cars(8, 'blue');
car2.startDrivingProcess();
