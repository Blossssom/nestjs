import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { BloxxomModule } from './bloxxom/bloxxom.module';
import { UsersModule } from './users/users.module';
import { BloxxomService } from './bloxxom/bloxxom.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOOSE_KEY),
    BoardsModule,
    BloxxomModule,
    UsersModule,
    CatsModule,
    AuthModule,
  ],
  providers: [BloxxomService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}
