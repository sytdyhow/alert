import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PermissionsService } from '../services/permissions.service';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guards';
import { PermissionGuard } from '../guards/permission.guard';
import { Role } from '../decorator/role.decorator';

@Controller('permissions')
@ApiTags('Permission Controller')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  // @ApiBearerAuth()
  // @Role('user.read','user.write')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(+id);
  }
}
