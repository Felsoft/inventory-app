import { 
  Component,
  EventEmitter 
} from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'inventory-app';
  products: Product[];
  
  constructor(){
  // let newProduct = new Product(
  //     'Big Fela',
  //     'Snooker',
  //     '/assets/images/products/GSlogo.png',
  //     ['Accessories', 'SnookerTables'],
  //     750.29
  //     );

      this.products = [
        new Product(
          'Big Fela',
          'Snooker',
          '/assets/images/products/GSlogo.png',
          ['Accessories', 'SnookerTables'],
          750.29),

        new Product(
          'Jerina Short Skirts',
          'Lady Mini',
          '/assets/images/products/GSlogo.png',
          ['Ladies', 'Skirts'],
          800.99),

        new Product(
         'Hero',
         'Toys',
         '/assets/images/products/GSlogo.png',
         ['Children', 'Boys', 'Toys'],
         100.29),
      ];
    }
    
    productWasSelected(product: Product): void {
       console.log('Product clicked: ', product);
    }
}
