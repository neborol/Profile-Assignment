import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'Profilefilter'
  })
  export class ProfilesFilter implements PipeTransform {
    transform(value: any, inputString: string) {
      if (!Array.isArray(value)) {
          return value;
      } else {
        return value.filter(function(profile: any) {
          return profile.firstName.startsWith(inputString);
        });
      }
    }
}
