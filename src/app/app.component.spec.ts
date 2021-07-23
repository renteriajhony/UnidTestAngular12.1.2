import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });


  describe('Objetos de la vista HTMl', () => {
    it('Dentro del toolbar existe un espan con el texto \'Welcome\'', async() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Welcome');
    });

    it('Dentro del contenido existe un espan con el texto \'Hola mundo\'', async() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('Hola mundo');
    });
  });

  describe('Operaciones Matematicas', () => {
    it('Suma de dos numeros, la suma debe ser 4', async () => {
      expect(app.sumar(2, 2)).toEqual(4);
    });
    it('Suma de dos numeros, la suma debe ser 5', async () => {
      expect(app.sumar(5, 0)).toEqual(5);
    });
    it('Resta de dos numeros, la resta debe ser 3', async () => {
      expect(app.restar(100, 97)).toEqual(3);
    });
    it('Resta de dos numeros, la suma debe ser 0', async () => {
      expect(app.restar(5, 5)).toEqual(0);
    });
    it('Multiplicacion de dos numeros, la multiplicacion debe ser 8', async () => {
      expect(app.multiplicar(4, 2)).toEqual(8);
    });
    it('Multiplicacion de dos numeros, la multiplicacion debe ser 0', async () => {
      expect(app.multiplicar(0, 5)).toEqual(0);
    });
    it('Divicion de dos numeros, la Divicion debe ser 50', async () => {
      expect(app.dividir(100, 2)).toEqual(50);
    });
    it('Divicion de dos numeros, la Divicion debe ser 0', async () => {
      expect(app.dividir(123, 0)).toEqual(0);
    });
    it('Divicion de dos numeros, la Divicion debe ser 0', async () => {
      expect(app.dividir(123, 0)).toEqual(0);
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
