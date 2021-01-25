import {OrdersService} from './OrdersService';
import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Orders} from '../types/OrdersType';

describe('OrdersService', () => {
  let serviceTest: OrdersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    });
    serviceTest = TestBed.inject(OrdersService);
  });
  describe('getOrders', () => {
    let ordersService: OrdersService;
    let httpTestingController: HttpTestingController;
    let mockOrder: Orders;

    beforeEach(() => {
      ordersService = TestBed.inject(OrdersService);
      httpTestingController = TestBed.inject(HttpTestingController);
      mockOrder = {
        id: 1,
        docDate: '2019-02-11',
        docNum: 'ORD-243',
        description: 'Системные блоки - Asus'
      };
    });
    it('should GET list of orders', () => {
      ordersService.getOrders().subscribe((orders) => {
        expect(orders[0]).toEqual(mockOrder);
      });
    });
  });
});
