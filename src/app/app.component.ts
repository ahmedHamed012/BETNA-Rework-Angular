import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from "./Shared/nav-bar/nav-bar.component";
import { FooterComponent } from "./Shared/footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ButtonModule, NavBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Betna';
}
