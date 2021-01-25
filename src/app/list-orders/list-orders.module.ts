import {NgModule} from '@angular/core';
import {ListOrdersComponent} from './list-orders.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {OrderItemComponent} from '../order-item/order-item.component';

@NgModule({
  declarations: [ListOrdersComponent, OrderItemComponent],
  imports: [RouterModule.forChild([
      {path: '', component: ListOrdersComponent}
    ]
  ), CommonModule
  ]
})
export class ListOrdersModule {
}
