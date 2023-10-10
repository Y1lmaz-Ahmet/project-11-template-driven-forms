import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-11-template-driven-forms';


  @ViewChild('myForm',{static:true}) myForm:any
  firstname:string=""
  lastname:string=""
  email: string = ""
  
  persons:any[]=[{firstname:this.firstname,lastname:this.lastname,email:this.email}]
  onSubmit(formValues:any)
  {
    console.log(formValues);
    console.table(formValues.value);
    this.firstname = formValues.value.firstname
    this.lastname = formValues.value.lastname
    this.email = formValues.value.email

    //push the person object in the array
    this.persons.push({firstname:this.firstname,lastname:this.lastname,email:this.email})
    //resets the form by clearing the inputs and disabeling the submit button
    this.myForm.reset()
  }
}
