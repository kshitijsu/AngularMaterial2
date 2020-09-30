import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../model/user";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  name: string;
  age: number;
  city: string;
  address: string;
  pincode: number;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) { name, age, city, address, pincode }: User
  ) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.address = address;
    this.pincode = pincode;

    this.form = fb.group({
      name: [name],
      age: [age],
      city: [city],
      address: [address],
      pincode: [pincode],
    });
  }

  ngOnInit() {}

  onSave() {
    this.dialogRef.close(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}
