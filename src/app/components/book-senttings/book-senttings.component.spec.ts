import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSenttingsComponent } from './book-senttings.component';

describe('BookSenttingsComponent', () => {
  let component: BookSenttingsComponent;
  let fixture: ComponentFixture<BookSenttingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSenttingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSenttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
