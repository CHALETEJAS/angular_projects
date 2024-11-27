import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBingingComponent } from './data-binging.component';

describe('DataBingingComponent', () => {
  let component: DataBingingComponent;
  let fixture: ComponentFixture<DataBingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBingingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
