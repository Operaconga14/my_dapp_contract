import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormsContainersComponent } from './components/forms-containers/forms-containers.component';
import { BlockchainTutorComponent } from './components/blockchain-tutor/blockchain-tutor.component';
import { Web3ModalCoreButtonWrapperModule } from './Web3Modal/web3modal.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GreetingsComponent,
    FormControlComponent,
    FormGroupComponent,
    FormsContainersComponent,
    BlockchainTutorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Web3ModalCoreButtonWrapperModule,
    Web3ModalCoreButtonWrapperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
