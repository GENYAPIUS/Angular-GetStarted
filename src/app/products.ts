export class Product {
  constructor(id: number, name: string, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  new Product(1, 'Phone XL', 799, 'A large phone with one of the best screens'),
  new Product(
    2,
    'Phone Mini',
    699,
    'A great phone with one of the best cameras'
  ),
  new Product(3, 'Phone Standard', 299, ''),
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
