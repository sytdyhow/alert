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

  // @Get(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)

  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne1(+id);
  // }


  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne1(@Req() request) {
    const id =request.user.id
    console.log(id);
    
    return this.authService.findOne1(+id);

  }

 
}
