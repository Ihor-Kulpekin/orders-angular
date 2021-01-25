import {NgModule} from '@angular/core';
import {DetailsOrderComponent} from './details-order.component';
import {DetailsOrderItemComponent} from '../details-order-item/details-order-item.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DetailsOrderComponent, DetailsOrderItemComponent],
  imports: [RouterModule.forChild([
    {path: ':id', component: DetailsOrderComponent}
  ]), CommonModule
  ]
})
export class DetailsOrderModule {}
