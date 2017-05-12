import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, lenth: string, postfix: string): string {
    let limit = lenth ? parseInt(lenth, 10) : 10;
    let trail = postfix ? postfix : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
// http://youknowriad.github.io/angular2-cookbooks/pipe.html
