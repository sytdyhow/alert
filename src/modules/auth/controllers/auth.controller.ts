import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiTags('Auth Login')
  login(@Body() body:LoginDto ){
    return this.authService.login(body.username.toLowerCase(),body.password)
  }


  

 
}
