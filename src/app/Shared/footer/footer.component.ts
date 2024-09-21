import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faSquareFacebook: any = faSquareFacebook;
  faWhatsapp: any = faWhatsapp;
  faInstagram: any = faInstagram;
  faXTwitter: any = faXTwitter;
  faLinkedin: any = faLinkedin;
  faYoutube: any = faYoutube;
  iconStyle: any = {
    "color":"white",
    "font-size":"1.6rem"
  };
}
