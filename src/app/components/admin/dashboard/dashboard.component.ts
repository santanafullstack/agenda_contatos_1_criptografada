import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //atributo
  grafico: Chart = new Chart();

  ngOnInit(): void {
    this.grafico = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Gráfico modelo - agenda de contatos'
      },
      subtitle: {
        text: 'Treinamento Angular COTI Informática'
      },
      series: [
        { data: [{}], type: undefined as any }
      ],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    });
  }
}
