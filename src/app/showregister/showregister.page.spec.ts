import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowregisterPage } from './showregister.page';

describe('ShowregisterPage', () => {
  let component: ShowregisterPage;
  let fixture: ComponentFixture<ShowregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
