import { CatRequestDto } from './cats.request.dto';
import { PickType, ApiProperty } from '@nestjs/swagger';

export class CatResponseDto extends PickType(CatRequestDto, [
  'email',
  'name',
] as const) {
  @ApiProperty({
    example: 'aefno11243',
    description: 'auto id in mongoDB',
  })
  id: string;
}
