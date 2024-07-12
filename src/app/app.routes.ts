import { Routes } from '@angular/router';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [ 
    {path:"todos",component:TodoListsComponent},
    {path:"categories",component:CategoriesComponent}
];
