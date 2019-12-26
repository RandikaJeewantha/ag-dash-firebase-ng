import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.scss']
})
export class HeightComponent implements OnInit {

    chart: any;

    constructor() { }

    ngOnInit() {

        Chart.defaults.global.legend.display = false;

        this.chart = new Chart('Height', {

            type: 'bar',

            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Plants Height ( cm )'
                },
                
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            min: 0
                        }
                    }]
                }
            },

            data: {
                labels: ["plant1", "plant2", "plant3", "plant4"],
                datasets: [
                    {
                        barPercentage: 0.5,
                        barThickness: 60,
                        maxBarThickness: 80,
                        minBarLength: 0,
                        data: [10, 20, 30, 40],
                        backgroundColor: 'rgba(0, 0, 250, 0.5)'
                    }
                ]
            }
        });
    }
}
