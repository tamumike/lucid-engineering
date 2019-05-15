import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ApprovedBoolean'
})
export class ApprovedBooleanPipe implements PipeTransform {

  transform(value: boolean, args?: any): string {
    const x = value ? 'Approved' : 'Unapproved';
    return x;
  }

}
