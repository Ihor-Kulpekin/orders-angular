import {Component, OnInit} from '@angular/core';
import {OrderPositions} from '../types/OrdersType';
import {OrdersService} from '../services/OrdersService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css'],
  providers: [OrdersService]
})
export class DetailsOrderComponent implements OnInit{
  orderPositions: OrderPositions[] = [];

  constructor(private ordersService: OrdersService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id').charAt(0);
    this.getOrderPositions(Number(id));
  }

  getOrderPositions(id: number){
    this.ordersService.getOrderPositions(id).subscribe((data) => {
      console.log(data);
      this.orderPositions = data;
    });
  }
}
