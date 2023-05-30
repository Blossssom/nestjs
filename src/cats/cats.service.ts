import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Cat } from './cats.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catModel.exists({ email });

    // 기존 데이터 존재 유무
    if (isCatExist) {
      throw new UnauthorizedException('it is exist');
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catModel.create({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
