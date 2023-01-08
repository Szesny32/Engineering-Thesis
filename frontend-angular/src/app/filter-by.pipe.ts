import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(value: any[], field: string, operator: string, search: any): any {
    if (!value) {
      return [];
    }
    if (!field || !operator || !search) {
      return value;
    }
    return value.filter(item => {
      const left = item[field];
      const right = search;
      return left != right;
      
    });
  }
}