import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  chart: any;
  labels: any;
  data: any;

  constructor(db: AngularFireDatabase) {

    var data = [];
    var labels = [];
    var timelyData = {};

    var items = db.object('Humidity/');
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

    this.chart = new Chart('Humidity', {

      type: 'line',

      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Inhouse Humidity ( % )'
        },
        hover: {
          mode: 'label'
        },
        scales: {

          yAxes: [{
            display: true,
            ticks: {
              max: 85,
              min: 75
            }
          }]
        },
      },

      data: {

        datasets: [
          {
            showLine: true,
            type: 'line',
            label: 'Humidity',
            fill: 'false',
            backgroundColor: "#eebcde ",
            borderColor: "blue",
            borderDash: [5, 5],
          }
        ]
      }
    });
  }
}