import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatExpansionModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TopCardComponent } from './widgets/top-card/top-card.component';
import { TemperatureComponent } from './widgets/temperature/temperature.component';
import { HighchartsChartModule} from 'highcharts-angular';
import { HeightComponent } from './widgets/height/height.component';
import { ECComponent } from './widgets/ec/ec.component';
import { HumidityComponent } from './widgets/humidity/humidity.component';
import { PhComponent } from './widgets/ph/ph.component';
import { LightComponent } from './widgets/light/light.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TopCardComponent,
    TemperatureComponent,
    HeightComponent,
    ECComponent,
    HumidityComponent,
    PhComponent,
    LightComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TopCardComponent,
    TemperatureComponent,
    HumidityComponent,
    PhComponent,
    HeightComponent,
    ECComponent,
    LightComponent
  ]
})
export class SharedModule { }
