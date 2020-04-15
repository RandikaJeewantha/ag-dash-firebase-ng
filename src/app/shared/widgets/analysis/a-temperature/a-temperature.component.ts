import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-a-temperature',
  templateUrl: './a-temperature.component.html',
  styleUrls: ['./a-temperature.component.scss']
})
export class ATemperatureComponent implements OnInit {

  chart: any;
    labels: any;
    data: any;

    constructor(db: AngularFireDatabase) {

        var data = [];
        var labels = [];
        var timelyData = {};

        var items = db.object('Temperature/');
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

        Chart.defaults.global.legend.display = true;

        this.chart = new Chart('Temperature', {

            type: 'line',

            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Inhouse Temperature ( °C )'
                },
          
                scales: {

                    yAxes: [{
                        display: true
                    }]
                },
            },

            data: {

                datasets: [
                    {
                        showLine: true,
                        type: 'line',
                        label: 'Temperature',
                        fill: 'origin',
                        backgroundColor: 'rgba(0, 0, 250, 0.3)',
                    }
                ]
            }
        });
    }

}
