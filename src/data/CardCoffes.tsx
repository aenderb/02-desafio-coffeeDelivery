import { v4 as uuidv4 } from 'uuid'

export const cards = [
  {
    id: uuidv4(),
    imagemUrl: 'http://localhost:5173/src/assets/CoffeeTrad.png',
    tagNames: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    imagemUrl: 'http://localhost:5173/src/assets/CoffeeAmericano.png',
    tagNames: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    imagemUrl: 'http://localhost:5173/src/assets/CoffeeCremoso.png',
    tagNames: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imagemUrl: 'http://localhost:5173/src/assets/CoffeeGelado.png',
    tagNames: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    imagemUrl: 'http://localhost:5173/src/assets/CoffeeComLeite.png',
    tagNames: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
]
