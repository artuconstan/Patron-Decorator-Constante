import { Cafe } from "./cafe";
export class capuccinoDecorator {
    cafe: Cafe;
  
    constructor(cafe: Cafe) {
      this.cafe = cafe;
    }
  
    getDescription(): string {
      return this.cafe.description + " con Capuccino";
    }
  
    cost(): number {
      return this.cafe.cost() + 2; // Agregamos el costo del capuccino
    }
  }
  