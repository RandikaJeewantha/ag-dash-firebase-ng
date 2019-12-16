import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {

      chart: {
        type: 'spline',
        inverted: true
      },
      title: {
        text: 'Atmosphere Temperature by Altitude'
      },
      subtitle: {
        text: 'According to the Standard Atmosphere Model'
      },
      xAxis: {
        reversed: false,
        title: {
          enabled: true,
          text: 'Altitude'
        },
        labels: {
          format: '{value} km'
        },
        maxPadding: 0.05,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          format: '{value}°'
        },
        lineWidth: 2
      },
      legend: {
        enabled: false
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x} km: {point.y}°C'
      },
      plotOptions: {
        spline: {
          marker: {
            enable: false
          }
        }
      },
      series: [{
        name: 'Temperature',
        data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
        [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
      }]
    }
    HC_exporting(Highcharts);
  }
}
