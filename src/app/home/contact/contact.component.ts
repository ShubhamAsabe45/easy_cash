import { Component,OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @ViewChild('nameInput') nameInput!: ElementRef;
  contactForm!: FormGroup;
  constructor(private fb:FormBuilder){
    this.contact();
  }

  ngOnInit(): void {
  
  }

  contact(){
    this.contactForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      subject:['',[Validators.required]],
      message:['']
    })
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log('Form is invalid');
      this.focusFirstInvalidControl();
    }
  }

  private markAllAsTouched() {
    this.contactForm.markAllAsTouched();
  }

  private focusFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.nameInput.nativeElement;
    firstInvalidControl.focus();
  }
}
