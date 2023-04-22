import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from '@core/material.module';
import { MenuComponent } from '@shared/menu/component/menu.component';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ NavbarComponent, MenuComponent ],
        imports: [
          MaterialModule,
          CommonModule
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
      component.item = '123';
      spyOn(component.buscar, 'emit');
      fixture.detectChanges();
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('deberia emitir el evento buscar', () => {
      component.doBuscar();
      expect(component.buscar.emit).toHaveBeenCalledTimes(1);
    });
});
