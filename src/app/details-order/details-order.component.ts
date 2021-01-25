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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id').charAt(0);
    this.getOrderPositions(Number(id));
  }

  getOrderPositions(id: number): void{
    this.ordersService.getOrderPositions(id).subscribe((data) => {
      this.orderPositions = data;
    });
  }
}
