import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', loadComponent: () => import('./components/task-list/task-list.component').then(m => m.TaskListComponent) }
];
