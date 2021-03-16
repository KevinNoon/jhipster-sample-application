import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Modbus2SharedModule } from 'app/shared/shared.module';
import { Modbus2CoreModule } from 'app/core/core.module';
import { Modbus2AppRoutingModule } from './app-routing.module';
import { Modbus2HomeModule } from './home/home.module';
import { Modbus2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Modbus2SharedModule,
    Modbus2CoreModule,
    Modbus2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Modbus2EntityModule,
    Modbus2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Modbus2AppModule {}
