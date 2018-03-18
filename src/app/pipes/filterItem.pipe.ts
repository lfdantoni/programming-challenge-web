import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'favorite'})
export class FavoritePipe implements PipeTransform {
  transform(items: any[], value: boolean): any[] {
    if (!items || !value) { 
        return items; 
    }

    return items.filter(item => item.isFavorite == value );
  }
}
