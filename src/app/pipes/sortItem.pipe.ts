import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) { 
      return items; 
    }

    return items.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

