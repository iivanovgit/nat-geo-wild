import { Injectable } from '@angular/core';

export class Wildcat {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public gallery: string[]) { }
}

let WILDCATS = [
  new Wildcat(1, 'Snow Leopard', '../../../assets/images/snow-leo.jpg', [
    '../../../assets/images/snow-leo2.jpg'
  ]),
  new Wildcat(2, 'Tiger', '../../../assets/images/tiger.jpg', [
    '../../../assets/images/tiger-dinasty-1.jpg',
    '../../../assets/images/tiger-dinasty-2.jpg'
  ]),
  new Wildcat(3, 'Lion', '../../../assets/images/lion-bg.jpg', [
    '../../../assets/images/lions.jpg'
  ])
];

let wildcatsPromise = Promise.resolve(WILDCATS);

@Injectable()
export class WildcatsService {
  getWildcats() { return wildcatsPromise; }

  getWildcat(id: number | string) {
    return wildcatsPromise
      .then(wildcats => wildcats.find(wildcat => wildcat.id === +id));
  }
}
