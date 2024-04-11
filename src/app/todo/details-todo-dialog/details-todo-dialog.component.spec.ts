import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTodoDialogComponent } from './details-todo-dialog.component';

describe('EditTodoDialogComponent', () => {
  let component: DetailsTodoDialogComponent;
  let fixture: ComponentFixture<DetailsTodoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTodoDialogComponent]
    });
    fixture = TestBed.createComponent(DetailsTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
