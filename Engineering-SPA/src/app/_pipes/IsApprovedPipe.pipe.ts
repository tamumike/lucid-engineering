import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'IsApprovedPipe'
})
export class IsApprovedPipePipe implements PipeTransform {

  transform(value: boolean, args?: any): string {
    const x = value ? 'fa fa-check-circle' : 'fa fa-times-circle';
    return x;
  }

}
