export class Events {
 // _id: number;
  name: '';
  type: '';
  length: number;
  views: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}