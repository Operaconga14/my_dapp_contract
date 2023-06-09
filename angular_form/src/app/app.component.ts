import { Component } from '@angular/core';
import { Web3Service } from './services/web3.service';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  location: any;
  routerSubscription: any;

  Title = 'Dapp';

  onSupportedNetwork = true

  constructor(
    private router: Router,
    public w3s: Web3Service
  ) {}

  ngOnInit() {
    this.recallJsFunctions();
  }

  recallJsFunctions() {
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
      this.location = this.router.url;
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    })
  }
}
