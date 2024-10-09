import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
