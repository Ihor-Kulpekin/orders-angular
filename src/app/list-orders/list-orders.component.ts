import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../services/OrdersService';
import {Orders} from '../types/OrdersType';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [OrdersService]
})
export class ListOrdersComponent implements OnInit {
  orders: Orders[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
