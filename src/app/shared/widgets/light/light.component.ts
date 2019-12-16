import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      title: {
        text: 'Logarithmic axis demo'
      },

      xAxis: {
        tickInterval: 1,
        type: 'logarithmic'
      },

      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },

      series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        pointStart: 1
      }]
    }
  }
}
