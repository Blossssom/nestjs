import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from 'src/cats/cats.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;

    // email 존재 여부 확인
    const userInfo = await this.catsRepository.findByEmail(email);

    if (!userInfo) {
      throw new UnauthorizedException('로그인 정보를 확인해주세요');
    }

    // password 일치 여부
    const isPassowordValidate: boolean = await bcrypt.compare(
      password,
      userInfo.password,
    );

    if (!isPassowordValidate) {
      throw new UnauthorizedException('로그인 정보를 확인해주세요');
    }

    const payload = { email: email, sub: userInfo.id };
    return { token: this.jwtService.sign(payload) };
  }
}
