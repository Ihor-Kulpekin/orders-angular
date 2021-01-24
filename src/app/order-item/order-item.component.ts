import {Component, Input} from '@angular/core';
import {Orders} from '../types/OrdersType';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input('order-item') orderItem: Orders;
}
