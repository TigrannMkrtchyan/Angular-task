import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  accept(): void {
    this.newItemEvent.emit(true);
  }

  decline(): void {
    this.newItemEvent.emit(false);
  }
}
