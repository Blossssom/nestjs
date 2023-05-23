import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { BloxxomModule } from './bloxxom/bloxxom.module';
import { UsersModule } from './users/users.module';
import { BloxxomService } from './bloxxom/bloxxom.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [BoardsModule, BloxxomModule, UsersModule],
  providers: [BloxxomService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('bloxxom');
  }
}
