export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Sherlock Holmes',
    price: 19.99,
    description: 'Editora HarperCollins; 1ª edição (1 junho 2019)'
  },
  {
    id: 2,
    name: 'O mundo de Sofia',
    price: 29.99,
    description: 'Editora Seguinte; 1ª edição (19 novembro 2012)'
  },
  {
    id: 3,
    name: 'Arsene Lupin Y La Aguja Hueca',
    price: 99.70,
    description: 'Editora Principis; 1ª edição (11 fevereiro 2021)'
  }
];