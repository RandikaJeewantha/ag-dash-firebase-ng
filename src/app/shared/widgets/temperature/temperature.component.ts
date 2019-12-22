import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

    chartOptions: {};

    time = new Date();
    time2 = this.time

    Highcharts = Highcharts;
    
    constructor() {
        console.log(this.time);
        console.log(this.time2); 
    }

    ngOnInit() {
        this.chartOptions = {

            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'InHouse Temperature'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    format: '{value:%H:%m}'
                  },
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature ( °C )'
                }
            },
            legend: {
                enabled: false
            },

            exporting: {
                enabled: false
             },

            plotOptions: {
                area: {
        
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                name:'Temperature ( °C ) ',
                type: 'area',
                data: [["1576673907313",1], ["1576673907313",5], ["1576673907313",85]]
            }]
        }
    }
}
