import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input() schemas: any;
  @Output() onSubmit = new EventEmitter<any>();
  formData: any = {};
  errors: any = {};

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.onSubmit.emit(this.formData);
  }

  onHandleChange(event: any): void {
    this.formData = { ...this.formData, [event.name]: event.value };
    this.errors = { ...this.errors, [event.name]: event.value };
  }
}
