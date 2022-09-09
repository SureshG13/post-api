import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'postgres',
      password:'suresh',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
