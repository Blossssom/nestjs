import { Injectable, PipeTransform, HttpException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value is not positive int', 400);
    }
    return value;
  }
}
