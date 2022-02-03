import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styles: [],
})
export class IncrementDecrementComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('name') title: string = 'title';
  @Input() progress: number = 50;

  @Output('valueUpdated') valueChanged: EventEmitter<number> =
    new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.valueChanged.emit(this.progress);
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
    this.valueChanged.emit(this.progress);
  }
}
