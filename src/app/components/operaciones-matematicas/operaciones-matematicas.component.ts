import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones-matematicas',
  templateUrl: './operaciones-matematicas.component.html',
  styleUrls: ['./operaciones-matematicas.component.css']
})
export class OperacionesMatematicasComponent implements OnInit {

  @ViewChild('number_a') number_a: any;
  @ViewChild('number_b') number_b: any;
  @ViewChild('result') result: any;

  constructor() { }

  ngOnInit(): void {
  }




  public sumar(a:number, b: number) {
    return Number(a) + Number(b);
  }

  public restar(a:number, b: number) {
    return a-b;
  }

  public multiplicar(a:number, b: number) {
    return a*b;
  }

  public dividir(a:number, b: number) {
    if(b==0){
      return 0;
    }else{
      return a/b;
    }
  }

  public mostrarResultado(caso:String) {
    let num = 0;
    let number_a: number = this.number_a.nativeElement.value as number;
    let number_b: number = this.number_b.nativeElement.value as number;
    switch (caso) {
      case "s": {
        num = this.sumar(number_a,number_b);
        break;
      }
      case "r": {
        num = this.restar(number_a,number_b);
        break;
      }
      case "m": {
        num = this.multiplicar(number_a,number_b);
        break;
      }
      case "d": {
        num = this.dividir(number_a,number_b);
        break;
      }
      /*default: {
        num = 0;
        break;
      }*/
    }
    this.result.nativeElement.value = num;
  }

}
