import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  tipo: string = 'date'
  valorInput: string =''
  valor: number = 0

  constructor(private _snackBar: MatSnackBar) {}

  mostrarSnackBar(): void {
    this._snackBar.open('voce clicou nesse botao', 'fechar')
  }

  alterarValor(event: any): void {
    this.valorInput = event.target.value
  }
  acrescimo(): void{
    this.valor = this.valor +1
  }
  decrescimo(): void{
    this.valor = this.valor -1
  }
    
}
