import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { User } from "../model/user";
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  name: string;
  age: number;
  city: string;
  address: string;
  pincode: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    console.log("Dialog Opened");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name: this.name,
      age: this.age,
      city: this.city,
      address: this.address,
      pincode: this.pincode,
    };

    const dialogRef = this.dialog.open(UserDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((user) => {
      console.log("Dialog Closed");
      console.log("Dialog Output: " + user);
      this.name = user.name;
      this.age = user.age;
      this.city = user.city;
      this.address = user.address;
      this.pincode = user.pincode;
    });
  }
}
