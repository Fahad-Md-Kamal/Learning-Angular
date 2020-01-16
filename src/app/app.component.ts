import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;


  ngOnInit() {
    this.projectForm = new FormGroup({
      // ASYNC validator must be passed in the third parameter
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
    });
  }
  onSubmit(){
    console.log(this.projectForm.value);
  }

}
