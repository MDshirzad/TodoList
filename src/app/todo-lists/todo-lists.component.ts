import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  Title: string;
  Id: number;
  Category:string;
  Description: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, Title: 'Hydrogen',Category:'damage', Description: "1.0079", Action: 'H'},
  {Id: 2, Title: 'Helium',Category:'damage', Description: "4.0026", Action: 'He'},
  {Id: 3, Title: 'Lithium',Category:'damage', Description: "6.941", Action: 'Li'},
  {Id: 4, Title: 'Beryllium',Category:'damage', Description: "9.0122", Action: 'Be'} 
 
];

@Component({
  selector: 'app-todo-lists',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.scss'
})
export class TodoListsComponent {
  displayedColumns: string[] = ['Id', 'TodoTitle','Category', 'Description', 'Action'];
  dataSource = ELEMENT_DATA;
}
