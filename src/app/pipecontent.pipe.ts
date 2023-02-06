import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecontent'
})
export class PipecontentPipe implements PipeTransform {

  x:string='';
  transform(value: string, ...args: unknown[]): unknown {
    this.x = value.split('').reverse().join('');
    return this.x;
  }


}
