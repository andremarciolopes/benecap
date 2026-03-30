import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeCredenciadaComponent } from './rede-credenciada.component';

describe('RedeCredenciadaComponent', () => {
  let component: RedeCredenciadaComponent;
  let fixture: ComponentFixture<RedeCredenciadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeCredenciadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeCredenciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
