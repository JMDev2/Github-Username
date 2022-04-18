import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
  transform(languages: string[], searchInput: string): any[]{     
    if(!searchInput) {
        return  [];
    }
   searchInput = searchInput.toLowerCase();
   return languages.filter(
       x =>x.toLowerCase().includes(searchInput)
   )
 }


  }


