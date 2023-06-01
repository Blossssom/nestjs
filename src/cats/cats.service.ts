import { CatsRepository } from './cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}
  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    // 기존 데이터 존재 유무
    if (isCatExist) {
      throw new UnauthorizedException('it is exist');
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.createUser({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
