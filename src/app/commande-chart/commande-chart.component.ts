import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-commande-chart',
  templateUrl: './commande-chart.component.html',
  styleUrls: ['./commande-chart.component.css']
})
export class CommandeChartComponent  {
  lineChart = new Chart({
    chart: {
      type: 'line',
      width: 400, 
      height: 300, 
    },
    title: {
      text: '',
      style: {
     
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    series: [
      {
        name: 'commandes',
        data: [0, 100, 200, 400, 300, 700, 600, 300]
      } as any
    ]
  })}