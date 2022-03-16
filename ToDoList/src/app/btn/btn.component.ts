import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent  {

  @Output()
  btnclick: EventEmitter<any> = new EventEmitter<any>()

  personalEvent(): void {
    this.btnclick.emit()
  }
}
