import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StatusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: boolean, args?: any): string {
    const x = value ? 'text-success' : 'text-danger';
    return x;
  }

}
