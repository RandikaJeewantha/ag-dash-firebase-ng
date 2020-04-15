import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatExpansionModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule} from '@angular/material';
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
import { MEssentialsModifyComponent } from './modifires/m-essentials-modify/m-essentials-modify.component';
import { PlantDetailsComponent } from './widgets/plant-details/plant-details.component';
import { EssentialTableComponent } from './modifires/essential-table/essential-table.component';
import { DatePipe } from '@angular/common';
import { MEssentialsAddComponent } from './modifires/m-essentials-add/m-essentials-add.component';
import { ContainComponent } from './widgets/analysis/contain/contain.component';
import { AEcComponent } from './widgets/analysis/a-ec/a-ec.component';
import { AHeightComponent } from './widgets/analysis/a-height/a-height.component';
import { AHumidityComponent } from './widgets/analysis/a-humidity/a-humidity.component';
import { ALightComponent } from './widgets/analysis/a-light/a-light.component';
import { APhComponent } from './widgets/analysis/a-ph/a-ph.component';
import { ATemperatureComponent } from './widgets/analysis/a-temperature/a-temperature.component';
import { AStatusComponent } from './widgets/analysis/a-status/a-status.component';

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
    MEssentialsModifyComponent,
    PlantDetailsComponent,
    EssentialTableComponent,
    MEssentialsAddComponent,
    ContainComponent,
    AEcComponent,
    AHeightComponent,
    AHumidityComponent,
    ALightComponent,
    APhComponent,
    ATemperatureComponent,
    AStatusComponent
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
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
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
    MEssentialsModifyComponent,
    PlantDetailsComponent,
    EssentialTableComponent,
    ContainComponent,
    AStatusComponent
  ],
  entryComponents: [
    MEssentialsModifyComponent,
    MEssentialsAddComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
