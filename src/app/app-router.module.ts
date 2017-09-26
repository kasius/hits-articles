import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
