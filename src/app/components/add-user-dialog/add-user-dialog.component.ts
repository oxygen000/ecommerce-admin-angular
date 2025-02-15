import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'; // ✅ أضف هذا
import { MatOptionModule } from '@angular/material/core';  // ✅ أضف هذا


@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, BrowserModule,FormsModule,MatOptionModule,MatSelectModule], // أضف الوحدات هنا
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent {
  user = { name: '', email: '', role: 'user' };

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  save() {
    this.dialogRef.close(this.user);
  }
}
