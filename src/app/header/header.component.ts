import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OrdersService} from '../services/OrdersService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OrdersService]
})
export class HeaderComponent  {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
