function CreateThings(...params) {
  params.forEach(param => this.param = param);
}

const Scooter = CreateThings(year, color, model);

// function Scooter(year, color, model) {
//   this.year = year;
//   this.color = color;
//   this.model = model;
// }

// function Scooter(year, color, model) {
//   this.year = year;
//   this.color = color;
//   this.model = model;
// }
