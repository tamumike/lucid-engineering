import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateCompleted'
})
export class DateCompletedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const d = new Date(value);
    const x = d.getFullYear() !== 1 ? value : '';
    return x;
  }

}
