import { NgModule, Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { W3McoreButtonComponentWrapperComponent } from './w3-mcore-button-component-wrapper/w3-mcore-button-component-wrapper.component';



@NgModule({
  declarations: [ W3McoreButtonComponentWrapperComponent],
  exports: [W3McoreButtonComponentWrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Web3ModalCoreButtonWrapperModule { }
