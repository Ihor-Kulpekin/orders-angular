import {TestBed} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {FooterComponent} from './footer.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  it('should render footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });
});
