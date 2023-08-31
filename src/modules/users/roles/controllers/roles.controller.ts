import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '../../permissions/decorator/role.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guards';
import { PermissionGuard } from '../../permissions/guards/permission.guard';

@Controller('roles')
@ApiTags('Roles Controllers')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  // @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
