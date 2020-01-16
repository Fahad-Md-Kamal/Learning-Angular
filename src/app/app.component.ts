import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((statusChanges) => console.log(statusChanges));

    // this.signupForm.setValue({
    //   'username': 'Max',
    //   'email': 'max@test.com',
    //   'gender': 'male',
    //   'hobbies': []
    // });


    // //    This will help to set value to some of the controls of the form    ///// 
    // this.signupForm.patchValue({
    //   'username': 'Fahad',
    //   'email': 'Fahad@test.com'
    // });

  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset({'gender': new FormControl('Male')}); /////// Not Working to set value while doing reset to the form
    this.signupForm.reset();
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promis = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promis;
  }
}
