import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesMatematicasComponent } from './operaciones-matematicas.component';

describe('OperacionesMatematicasComponent', () => {
  let component: OperacionesMatematicasComponent;
  let fixture: ComponentFixture<OperacionesMatematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesMatematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesMatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Operaciones Matematicas', () => {
    it('Suma de dos numeros, la suma debe ser 4', async () => {
      expect(component.sumar(2, 2)).toEqual(4);
    });
    it('Suma de dos numeros, la suma debe ser 5', async () => {
      expect(component.sumar(5, 0)).toEqual(5);
    });
    it('Resta de dos numeros, la resta debe ser 3', async () => {
      expect(component.restar(100, 97)).toEqual(3);
    });
    it('Resta de dos numeros, la suma debe ser 0', async () => {
      expect(component.restar(5, 5)).toEqual(0);
    });
    it('Multiplicacion de dos numeros, la multiplicacion debe ser 8', async () => {
      expect(component.multiplicar(4, 2)).toEqual(8);
    });
    it('Multiplicacion de dos numeros, la multiplicacion debe ser 0', async () => {
      expect(component.multiplicar(0, 5)).toEqual(0);
    });
    it('Divicion de dos numeros, la Divicion debe ser 50', async () => {
      expect(component.dividir(100, 2)).toEqual(50);
    });
    it('Divicion de dos numeros, la Divicion debe ser 0', async () => {
      expect(component.dividir(123, 0)).toEqual(0);
    });
    it('Divicion de dos numeros, la Divicion debe ser 0', async () => {
      expect(component.dividir(123, 0)).toEqual(0);
    });
  });

  describe('Imprimir resultados de operaciones matematicas', () => {
    it('Imprimir suma', async () => {
      const hostElement = fixture.nativeElement;
      const number_a: HTMLInputElement = hostElement.querySelector('#number_a');
      const number_b: HTMLInputElement = hostElement.querySelector('#number_b');
      fixture.detectChanges();
      number_a.value = '3';
      number_b.value = '3';
      document.getElementById('btn_s')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('6');
    });

    it('Imprimir resta', async () => {
      const hostElement = fixture.nativeElement;
      const number_a: HTMLInputElement = hostElement.querySelector('#number_a');
      const number_b: HTMLInputElement = hostElement.querySelector('#number_b');
      fixture.detectChanges();
      number_a.value = '3';
      number_b.value = '3';
      document.getElementById('btn_r')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('0');
    });

    it('Imprimir multiplicacion', async () => {
      const hostElement = fixture.nativeElement;
      const number_a: HTMLInputElement = hostElement.querySelector('#number_a');
      const number_b: HTMLInputElement = hostElement.querySelector('#number_b');
      fixture.detectChanges();
      number_a.value = '3';
      number_b.value = '3';
      document.getElementById('btn_m')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('9');
    });

    it('Imprimir divicion', async () => {
      const hostElement = fixture.nativeElement;
      const number_a: HTMLInputElement = hostElement.querySelector('#number_a');
      const number_b: HTMLInputElement = hostElement.querySelector('#number_b');
      fixture.detectChanges();
      number_a.value = '3';
      number_b.value = '3';
      document.getElementById('btn_d')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('1');
    });

    it('Imprimir divicion cero', async () => {
      const hostElement = fixture.nativeElement;
      const number_a: HTMLInputElement = hostElement.querySelector('#number_a');
      const number_b: HTMLInputElement = hostElement.querySelector('#number_b');
      fixture.detectChanges();
      number_a.value = '3';
      number_b.value = '0';
      document.getElementById('btn_d')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('0');
    });

  });

});
