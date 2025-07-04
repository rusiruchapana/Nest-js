import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from "../task-item/task-item.component";
import { log } from 'console';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }


  ngOnInit(): void {
      this.getTasks();
      console.log(this.tasks);
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }


}
