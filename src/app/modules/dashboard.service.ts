import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Asia',
      data: [582, 635, 809, 947, 1487, 3634, 5268]
    },{
      name: 'Africa',
      data: [186, 187, 111, 133, 221, 767, 1766]
    },{
      name: 'Europe',
      data: [163, 283, 276, 488, 547, 729, 628]
    },{
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    },{
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 38, 46]
    },]
  }

  cards() {
    return [71, 78, 39,66];
  }

  pieCharts() {
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }]
  }

}
