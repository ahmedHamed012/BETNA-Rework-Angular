import { CommonModule } from '@angular/common';
import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputIconModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    FontAwesomeModule,
    InputTextareaModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageComponent {
  faLightBulb = faLightbulb
  faQuoteLeft = faQuoteLeft
  services: any[] = [];
  ngOnInit() {}
  // import Swiper JS


}
