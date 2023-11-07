import { Cafe } from "./cafe";
export class LecheDecorator {
    cafe: Cafe;
  
    constructor(cafe: Cafe) {
      this.cafe = cafe;
    }
  
    getDescription(): string {
      return this.cafe.description + " con Leche";
    }
  
    cost(): number {
      return this.cafe.cost() + 2; // Agregamos el costo de la leche
    }
  }
  