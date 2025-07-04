import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.task._id);
  }
}
