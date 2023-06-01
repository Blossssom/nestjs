import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1y' } }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}