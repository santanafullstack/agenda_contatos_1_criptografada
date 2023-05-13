import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContatosComponent } from './editar-contatos.component';

describe('EditarContatosComponent', () => {
  let component: EditarContatosComponent;
  let fixture: ComponentFixture<EditarContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
