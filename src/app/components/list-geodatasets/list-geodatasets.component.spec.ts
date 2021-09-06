import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeodatasetsComponent } from './list-geodatasets.component';

describe('ListGeodatasetsComponent', () => {
  let component: ListGeodatasetsComponent;
  let fixture: ComponentFixture<ListGeodatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGeodatasetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeodatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
