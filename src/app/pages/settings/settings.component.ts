import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'] 
})
export class SettingsComponent {
  settings = {
    notifications: true,
    language: 'English',
    timeZone: 'GMT',
    autoUpdate: false,
    sessionTimeout: 15,
    twoFactorAuth: false,
    securityAlerts: false,
    username: 'Admin',
    email: 'admin@example.com'
  };

  saveSettings(): void {
    console.log('Settings saved:', this.settings);
    alert('Settings have been updated successfully!');
  }

  updateSecuritySettings(): void {
    console.log('Security settings updated:', {
      twoFactorAuth: this.settings.twoFactorAuth,
      securityAlerts: this.settings.securityAlerts
    });
    alert('Security settings updated successfully!');
  }
}
