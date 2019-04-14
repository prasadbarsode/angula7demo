import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCrudComponent } from './account-crud.component';

describe('AccountCrudComponent', () => {
  let component: AccountCrudComponent;
  let fixture: ComponentFixture<AccountCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
