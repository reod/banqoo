import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plncurrency'
})
export class PlncurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const rounded = parseFloat(value).toFixed(2);
    const formatted = String(rounded).replace('.', ',') + 'zł';

    return formatted;
  }

}
