import { 
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Product } from '../product.model'

import { from } from 'rxjs';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit() {
  }

}
