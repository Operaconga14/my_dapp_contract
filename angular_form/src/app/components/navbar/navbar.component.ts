import { Component, OnInit } from '@angular/core';
import { providers } from 'ethers';
import { Web3Service } from 'src/app/services/web3.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private web3: Web3Service) {
    
  }

  ngOnInit(): void {}

  async connectAccount() {
    // this.web3.web3Modal?.openModal();

    await providers.AlchemyProvider
   await this.web3.connectAccount();
   this.web3.getAccountInfo()

  }
  
}
