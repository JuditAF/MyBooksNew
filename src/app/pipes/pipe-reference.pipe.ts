import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeReference'
})
export class PipeReferencePipe implements PipeTransform {

  transform(idBook: number): string {

    let result: string;
    result = "Ref-" + idBook;
    return result;
  }

}
