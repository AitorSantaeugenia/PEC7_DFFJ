
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(imgUrl: string | undefined | null): string {
    const defaultImageUrl = 'assets/images/default-image.png';

    return imgUrl ? imgUrl : defaultImageUrl;
  }
}