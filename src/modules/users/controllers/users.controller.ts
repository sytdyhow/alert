import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guards';
@Controller({
  path:'users'
})

@Controller('users')
@ApiTags('Users Controller')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiConsumes('application/json')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('users.create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

    // @Permissions('users.read')
  async findAll() {
    const users=await this.usersService.findAll();
    const response= users.filter((use)=>{
      if(use.active==true)
        return use
      
    })
          return response;
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('users.read')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  
  // @Permissions('users.update')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('users.delete')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
