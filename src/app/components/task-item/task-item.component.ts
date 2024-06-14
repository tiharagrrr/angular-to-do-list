import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, title: '', day: '', reminder: false}
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
    
  }

}
