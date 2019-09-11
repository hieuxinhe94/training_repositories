import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRegisterFormComponent } from './template-register-form.component';

describe('TemplateRegisterFormComponent', () => {
  let component: TemplateRegisterFormComponent;
  let fixture: ComponentFixture<TemplateRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
