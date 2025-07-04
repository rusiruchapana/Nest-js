import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  task: Task = {
    title: '',
    description: '',
    completed: false
  };

  onSubmit(): void {
    if (this.task.title.trim()) {
      this.taskCreated.emit({...this.task});
      this.task = {
        title: '',
        description: '',
        completed: false
      };
    }
  }
}
