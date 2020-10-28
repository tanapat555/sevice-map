import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtmPage } from './atm.page';

describe('AtmPage', () => {
  let component: AtmPage;
  let fixture: ComponentFixture<AtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
