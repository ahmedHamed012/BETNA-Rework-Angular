import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, DividerModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent {
  constructor(private readonly fb: FormBuilder) {}
  public contactForm = this.fb.group({
    name: new FormControl(null, []),
    city: new FormControl(null, []),
    government: new FormControl(null, []),
    description: new FormControl(null, []),
  });
  ngOnInit() {}
}
