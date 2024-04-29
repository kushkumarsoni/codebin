import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferDemoComponent } from './differ-demo.component';

describe('DifferDemoComponent', () => {
  let component: DifferDemoComponent;
  let fixture: ComponentFixture<DifferDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
