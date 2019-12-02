import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cinema'
})
export class CinemaPipe implements PipeTransform {

  transform(value: any, filter: any): any {

    if (!value) {
      return null;
    }
    if (!filter) {
      return value;
    }

    filter = filter.toLowerCase();

    return value.filter(function(item) {
      return JSON.stringify(item).toLowerCase().includes(filter);
    });
  }
}
