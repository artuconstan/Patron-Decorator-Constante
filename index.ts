import { Cafe } from "./cafe";
import { LecheDecorator } from "./LecheDecorator";
import { canelaDecorator } from "./canelaDecorator";
import { capuccinoDecorator } from "./capuccinoDecorator";
// Paso 3: Usar los decoradores
const cafeBase = new Cafe(); // Café simple
const cafeConLeche = new LecheDecorator(cafeBase)
const cafeConCanela=new canelaDecorator(cafeBase)
const capuccino=new capuccinoDecorator(cafeBase)
// Paso 4: Comprobar el resultado
console.log(cafeConLeche.getDescription()); // "Café simple, Leche, Chocolate"
console.log(`${cafeConLeche.cost()} Dólares`);  // 7 (5 del café base + 2 de la leche) 
console.log(cafeConCanela.getDescription()); // "Café simple, Capuccino"
console.log(`${cafeConCanela.cost()} Dolares`); // 7 (5 del café base + 2 del capuccino)
console.log(capuccino.getDescription()); // "Café simple, Canela"
console.log(`${capuccino.cost()} Dolares`); // 6 (5 del café base + 1 de la canela)
