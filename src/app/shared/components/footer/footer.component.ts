import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FacebookPixelService } from '../../services/facebook.pixels.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  disabled = false;

  phoneNumber: string = '+998 ';
  clientName: string = '';
  region: string = '';
  grade: string = '';
  error: boolean = false;

  show = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fcbPxlService: FacebookPixelService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.disabled = event.urlAfterRedirects === '/anor-kids';
      });
  }

  close() {
    setTimeout(() => {
      this.show = false;
    }, 6000);
  }

  sendClientDateToTelegram() {
    if (
      this.clientName.length < 4 ||
      this.region.length === 0 ||
      this.grade.length === 0 ||
      this.phoneNumber.length <= 11
    ) {
      this.error = true;
      this.show = true;
      this.close();
      return;
    }
    this.error = false;
    let msg = `Ism: ${this.clientName}; %0ATuman: ${this.region}; %0ASinf: ${this.grade}; %0ATelefon raqam: ${this.phoneNumber}`;
    this.http
      .get(
        `https://api.telegram.org/bot${environment.botToken}/sendMessage?chat_id=${environment.chat_id}&text=${msg}`
      )
      .subscribe((res) => [this.close(), this.fcbPxlService.pageView()]);
  }
}
