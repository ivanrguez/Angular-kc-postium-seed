import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blue'
})
export class BluePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
