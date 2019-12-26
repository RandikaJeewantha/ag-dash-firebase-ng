import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ec',
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.scss']
})
export class ECComponent implements OnInit {
    
  chart: any;
  labels: any;
  data: any;

  constructor(db: AngularFireDatabase) {

    var data = [];
    var labels = [];
    var timelyData = {};

    var items = db.object('EC/');
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

    this.chart = new Chart('EC', {

      type: 'line',

      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Plants EC ( ? )'
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
            label: 'EC',
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