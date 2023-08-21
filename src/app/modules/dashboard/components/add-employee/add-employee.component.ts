import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserserviceService } from 'src/app/service/user-service/userservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  public AddEmployeeForm:FormGroup;
  submitted:boolean=false;
  Employee: any;

  constructor(private UserserviceService:UserserviceService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,


    ){

      // customerName: new FormControl({ value: this.dealerPayoutDetails.customerName, disabled: true }),


       this.AddEmployeeForm = new FormGroup({

          name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),

    });
  }
  OnSubmit(){
    this.submitted =true
    if (this.AddEmployeeForm.valid) {
      if(this.data.value == 'add'){

        this.UserserviceService.AddEmployee({

          name : this.AddEmployeeForm.value.name,
          email : this.AddEmployeeForm.value.email,
          gender : this.AddEmployeeForm.value.gender,
          bio : this.AddEmployeeForm.value.bio,
          city : this.AddEmployeeForm.value.city,
        }).subscribe((el:any)=>{
          console.log(el,'sscs')
        this.UserserviceService.toast.snackbarSucces(el.error);


          this.dialogRef.close(el);
      this.UserserviceService.toast.snackbarSucces("User Added Successfully!");

        })
      }
      else {
        this.UserserviceService.UpdateEmployee({

          name : this.AddEmployeeForm.value.name,
          email : this.AddEmployeeForm.value.email,
          gender : this.AddEmployeeForm.value.gender,
          bio : this.AddEmployeeForm.value.bio,
          city : this.AddEmployeeForm.value.city,
        }).subscribe((el:any)=>{
          this.dialogRef.close(el);
      this.UserserviceService.toast.snackbarSucces("User Updated Successfully!");

        })

      }
  }
  }

  ngOnInit(): void {

    if(this.data?.value == 'edit'){
      this.UserserviceService.Get(this.data).subscribe((val:any)=>{
        this.Employee = val?.employee



       this.AddEmployeeForm = new FormGroup({

        name: new FormControl(this.Employee.name, [Validators.required]),
    email: new FormControl(this.Employee.email, [Validators.required]),
    gender: new FormControl(this.Employee.gender, [Validators.required]),
    city: new FormControl(this.Employee.city, [Validators.required]),
    bio: new FormControl(this.Employee.bio, [Validators.required]),

  });


      })

    }

  }

}
