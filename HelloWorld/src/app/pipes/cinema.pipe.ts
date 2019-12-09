import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cinema'
})
export class CinemaPipe implements PipeTransform {

  transform(value: any, filter: any): any {

    if (!value || !filter) {
      return value;
    }
    return value.filter(item => (JSON.stringify(item).toLowerCase().includes(filter)));
  }
}
