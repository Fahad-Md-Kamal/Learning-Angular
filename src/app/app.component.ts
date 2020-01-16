import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUsername = ['Chris', 'Anna'];
   

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null,[ Validators.required, this.forbiddenName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });


    // Grouping Controles
    // this.signupForm = new FormGroup({
    //   'userData': new FormGroup ({
    //     'username': new FormControl(null, Validators.required),
    //     'email': new FormControl(null, [Validators.required, Validators.email]),
    //   }),
    //   'gender': new FormControl('Male'),
    // });


  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  
  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
