import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyname'
})
export class SearchbynamePipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    if(!searchText) return value;



        return value.filter(it => {
        return it.name.toLowerCase().includes(searchText);
    //     return it.hospital_city.toLowerCase().includes(searchCity);

     });
   // return null;
  }

}
