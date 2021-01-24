import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {InputDirective} from './directivies/input-directive.directive';
import {RouterModule} from '@angular/router';
import {ListOrdersComponent} from './list-orders/list-orders.component';
import {DetailsOrderComponent} from './details-order/details-order.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderItemComponent} from './order-item/order-item.component';
import {FooterComponent} from './footer/footer.component';
import {DetailsOrderItemComponent} from './details-order-item.component/details-order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputDirective,
    ListOrdersComponent,
    DetailsOrderComponent,
    OrderItemComponent,
    FooterComponent,
    DetailsOrderItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ListOrdersComponent},
      {path: 'details/:id', component: DetailsOrderComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
