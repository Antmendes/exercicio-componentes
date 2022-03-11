import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  
 @Input()
 id: string =''

@Input()
titulo: string = ''

@Input()
preco: string = ''

@Input()
conteudo1: string = ''

@Input()
conteudo2: string = ''

@Input()
conteudo3: string = ''

@Input()
btn: string = 'LEARN MORE'

@Input()
backgroundColor: string = ''

@Output()
btnclick: EventEmitter<any> = new EventEmitter<any>()

emitirEvento(): void {
  this.btnclick.emit()
}
  
}
