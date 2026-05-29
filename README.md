# TypeScript Vehicle Interface — GoMyCode Checkpoint

A TypeScript exercise demonstrating **interfaces**, **classes**, and the `implements` keyword, built with **Vite**.

---

## Concepts Covered

- Defining a TypeScript `interface` with typed properties and a method signature
- Implementing an interface with a `class` using the `implements` keyword
- Constructors that initialize class properties
- Compiling TypeScript to JavaScript with `tsc`
- Running compiled JavaScript with Node.js

---

## Project Structure

```
checkpoint/
├── src/
│   ├── vehicle.ts      # Interface + Car class (core logic)
│   ├── main.ts         # Vite browser entry — renders Car details to the page
│   └── style.css       # Page styles
├── tsconfig.json        # Vite / browser TypeScript config
├── tsconfig.node.json   # Node compile config (emits JS for step 5)
└── index.html
```

---

## The Code

### Vehicle Interface

```typescript
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}
```

### Car Class

```typescript
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
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start(); // → "Car engine started"
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Install dependencies

```bash
npm install
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server — open browser UI at `localhost:5173` |
| `npm run compile` | **Step 5** — compile `vehicle.ts` → JS and run with Node |
| `npm run build` | Production browser bundle |
| `npm run preview` | Preview the production build |

---

## Step 5 — Compile & Run

To compile the TypeScript to JavaScript and run it:

```bash
npm run compile
```

Expected output:

```
Car engine started
```

This compiles `src/vehicle.ts` to `dist-node/vehicle.js` using `tsc`, then runs it with `node`.

---

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) ~6.0
- [Vite](https://vite.dev/) ^8.0
