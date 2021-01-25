import {Component, Input} from '@angular/core';
import {OrderPositions} from '../types/OrdersType';

@Component({
  selector: 'app-order-positions',
  templateUrl: './details-order-item.component.html',
  styleUrls: ['./details-order-item.component.css']
})
export class DetailsOrderItemComponent {
  @Input('orderPositon') orderPosition: OrderPositions;
}
