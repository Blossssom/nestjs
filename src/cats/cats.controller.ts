import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiResponse({
    status: 500,
    description: 'Server error!',
  })
  @ApiResponse({
    status: 200,
    description: 'success!',
  })
  @ApiOperation({ summary: '회원가입 api' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }
}
