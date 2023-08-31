import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { config } from 'process';

@Module({

  imports:[
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async(config:ConfigService)=>{
        return {
          secretOrKeyProvider:config.get('JWT_SECRET'),
        };
      },
      inject:[ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),


  ],

  controllers: [AuthController],
  providers: [AuthService,JwtService,JwtAuthGuard,JwtStrategy,ConfigService],
})
export class AuthModule {}
