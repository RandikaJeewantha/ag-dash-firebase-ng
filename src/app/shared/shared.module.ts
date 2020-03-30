import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatExpansionModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TopCardComponent } from './widgets/top-card/top-card.component';
import { TemperatureComponent } from './widgets/temperature/temperature.component';
import { HeightComponent } from './widgets/height/height.component';
import { ECComponent } from './widgets/ec/ec.component';
import { HumidityComponent } from './widgets/humidity/humidity.component';
import { PhComponent } from './widgets/ph/ph.component';
import { LightComponent } from './widgets/light/light.component';
import { MTopCardComponent } from './modifires/m-top-card/m-top-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MEssentialsCardComponent } from './modifires/m-essentials-card/m-essentials-card.component';
import { PlantDetailsComponent } from './widgets/plant-details/plant-details.component';
import { EssentialTableComponent } from './modifires/essential-table/essential-table.component';

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
    LightComponent,
    MTopCardComponent,
    MEssentialsCardComponent,
    PlantDetailsComponent,
    EssentialTableComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
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
    LightComponent,
    MTopCardComponent,
    MEssentialsCardComponent,
    PlantDetailsComponent,
    EssentialTableComponent
  ]
})
export class SharedModule { }
