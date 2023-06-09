import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w3-mcore-button-component-wrapper',
  templateUrl: './w3-mcore-button-component-wrapper.component.html',
  styleUrls: ['./w3-mcore-button-component-wrapper.component.scss']
})
export class W3McoreButtonComponentWrapperComponent {
  @Input() balance: 'show'|'hide' = 'show';

}
