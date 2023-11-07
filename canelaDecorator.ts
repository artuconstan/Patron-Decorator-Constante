import { Cafe } from "./cafe";
export class canelaDecorator {
    cafe: Cafe;
  
    constructor(cafe: Cafe) {
      this.cafe = cafe;
    }
  
    getDescription(): string {
      return this.cafe.description + " con Canela";
    }
  
    cost(): number {
      return this.cafe.cost() + 1; // Agregamos el costo de la canela
    }
  }
  