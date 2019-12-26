import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  
  chart: any;
  labels: any;
  data: any;

  constructor(db: AngularFireDatabase) {

      var data = [];
      var labels = [];
      var timelyData = {};

      var items = db.object('Light/');
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
      });
  }

  ngOnInit() {

      Chart.defaults.global.legend.display = false;

      this.chart = new Chart('Light', {

          type: 'line',

          options: {
              responsive: true,
              title: {
                  display: true,
                  text: 'Inhouse Light ( Lux )'
              },
              elements: {
                  point: {
                      radius: null
                  }
              },
          },

          data: {

              datasets: [
                  {
                      showLine: true,
                      type: 'line',
                      label: 'Light',
                      fill: 'false',
                      borderColor: "blue",
                  }
              ]
          }
      });
  }
}
