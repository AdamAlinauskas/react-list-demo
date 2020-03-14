import React, { Component } from "react";

const cars = [
  "Tesla Model 3", // mapCarFromString('Telsa Model 3') ===>>>> <li>Tesla Model 3 </li>
  "Honda Civic", //<li>Honda Civic</li>
  "BMW M3", // <li>BMW M3</li>
  "Kia Sportage",
  "Toyota Supra",
  "Toyota Supra",
  "Honda S2000"
];

function mapCarFromString(carString, index) {
  return (
    <div key={index}>
      {index + 1} {carString}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        {cars.map((carString, index) => (
          <div key={index}>{carString}</div>
        ))}
      </div>
    );
  }
}

export default App;
