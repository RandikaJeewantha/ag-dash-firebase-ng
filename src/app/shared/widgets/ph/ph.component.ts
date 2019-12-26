import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.scss']
})
export class PhComponent implements OnInit {

    chart: any;
    labels: any;
    data: any;

    constructor(db: AngularFireDatabase) {

        var data = [];
        var labels = [];
        var timelyData = {};

        var items = db.object('PH/');
        items.snapshotChanges().subscribe(action => {

            timelyData = action.payload.val();

            let value = timelyData["Value"];
            let key = timelyData["Time"];

            labels.push(key);
            data.push(value);

            this.labels = labels;
            this.data = data;

            this.chart.data.datasets[0].data = this.data;
            this.chart.data.labels = this.labels;
            this.chart.update();

            console.log(this.data);
            console.log(this.labels);

        });
    }

    ngOnInit() {

        Chart.defaults.global.legend.display = false;

        this.chart = new Chart('PH', {

            type: 'line',

            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Plants PH ( ? )'
                },
                elements: {
                    point: {
                        radius: null
                    }
                },
                scales: {

                    yAxes: [{
                        display: true,
                        ticks: {
                            max: 30,
                            min: 20
                        }
                    }]
                },
            },

            data: {

                datasets: [
                    {
                        showLine: true,
                        type: 'line',
                        label: 'PH',
                        fill: 'origin',
                        backgroundColor: 'rgba(0, 0, 250, 0.3)',
                    }
                ]
            }
        });
    }
}
