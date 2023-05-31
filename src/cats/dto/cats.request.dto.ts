import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CatRequestDto {
  @ApiProperty({
    example: 'bloxxom@email.com',
    description: '회원가입을 위한 email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123123',
    description: '회원가입을 위한 비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'bloxxom',
    description: '회원가입을 위한 이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
