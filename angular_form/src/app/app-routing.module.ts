import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { FormsContainersComponent } from './components/forms-containers/forms-containers.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';

const routes: Routes = [
  {path: '', component: FormsContainersComponent},
  {path: 'form-control', component: FormControlComponent},
  {path: 'form-group', component: FormGroupComponent},
  {path: 'greetings', component: GreetingsComponent},
  {path: 'view-message', component: ViewMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
