import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,  // يجب إضافة `standalone: true` عند استخدام `imports`
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'] // لاحظ التعديل هنا ليكون `styleUrls`
})
export class SettingsComponent {
  settings = {
    notifications: true,
    language: 'English',
    darkMode: false
  };

  toggleSetting(setting: 'notifications' | 'darkMode') {
    this.settings[setting] = !this.settings[setting];
  }
}
