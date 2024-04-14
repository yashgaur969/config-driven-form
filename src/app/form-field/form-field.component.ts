import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
})
export class FormFieldComponent {
  @Input() field: any;
  @Input() value: any;
  @Output() onChange = new EventEmitter<any>();

  onCheckboxChange(event: any): void {
    this.onChange.emit({ value: event.target.checked, name: this.field.name });
  }

  onValueChange(event: any) {
    this.onChange.emit({ value: event.target.value, name: this.field.name });
  }
}
