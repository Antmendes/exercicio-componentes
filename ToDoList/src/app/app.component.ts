import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  tarefas: string[] | null = []

  
   ngOnInit(): void{
     this.recuperarDados()
   }
   
  @ViewChild('newTask')
  ipt!: ElementRef


  adicionarTarefas(valor: string): void {
    this.tarefas?.push(valor)
    this.ipt.nativeElement.value = ''
    localStorage.setItem('list', JSON.stringify(this.tarefas))
    this.recuperarDados()

  }
  clearList(): void {
    this.tarefas = []
    localStorage.clear()
  }

  clearItem(x:number): void{
    this.tarefas?.splice(x,1)
    let cll = JSON.stringify(this.tarefas)
    localStorage.setItem('list', cll)
    this.recuperarDados()
    
  }

  recuperarDados(): void{
    let storage = localStorage.getItem('list')
    let arr = JSON.parse( storage || '[]')
    this.tarefas = arr
  }
  

  
}
