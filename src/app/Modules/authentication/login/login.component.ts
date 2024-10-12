import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    ToggleButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private readonly fb: FormBuilder) {}
  public loginForm: FormGroup = this.fb.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  public checked: boolean = false;
  public showPasswordToggleForm!: FormGroup;
  ngOnInit() {
    this.showPasswordToggleForm = new FormGroup({
      checked: new FormControl<boolean>(false),
    });
    this.showPasswordToggleForm.get('checked')?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          const passwordInput = document.querySelectorAll(
            '#password-input'
          )[0] as HTMLElement;
          passwordInput.setAttribute('type', 'text');
        } else {
          const passwordInput = document.querySelectorAll(
            '#password-input'
          )[0] as HTMLElement;
          passwordInput.setAttribute('type', 'password');
        }
      },
    });
  }
}
