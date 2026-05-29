import './style.css';

// 1. Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implement the Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log('Car engine started');
  }
}

// 3. Create an instance of Car
const myCar = new Car('Toyota', 'Corolla', 2022);

// 4. Call start — logs "Car engine started" to the console
myCar.start();

// ── Render to page ──────────────────────────────────────────
const app = document.querySelector<HTMLDivElement>('#app')!;

const card = document.createElement('div');
card.className = 'car-card';

const title = document.createElement('h1');
title.textContent = '🚗 Car Instance';
card.appendChild(title);

const subtitle = document.createElement('p');
subtitle.className = 'subtitle';
subtitle.textContent = 'Car implements Vehicle';
card.appendChild(subtitle);

const properties: [string, string][] = [
  ['make', myCar.make],
  ['model', myCar.model],
  ['year', String(myCar.year)],
];

const list = document.createElement('ul');
list.className = 'property-list';

for (const [key, val] of properties) {
  const li = document.createElement('li');
  li.className = 'property-row';

  const label = document.createElement('span');
  label.className = 'property-key';
  label.textContent = key;

  const value = document.createElement('span');
  value.className = 'property-value';
  value.textContent = val;

  li.appendChild(label);
  li.appendChild(value);
  list.appendChild(li);
}

card.appendChild(list);

// Console output section
const consoleBox = document.createElement('div');
consoleBox.className = 'console-box';

const consoleLabel = document.createElement('span');
consoleLabel.className = 'console-label';
consoleLabel.textContent = 'console output';

const consoleLine = document.createElement('p');
consoleLine.className = 'console-line';
consoleLine.textContent = '> Car engine started';

consoleBox.appendChild(consoleLabel);
consoleBox.appendChild(consoleLine);
card.appendChild(consoleBox);

app.appendChild(card);
