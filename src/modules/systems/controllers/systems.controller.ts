import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SystemsService } from '../services/systems.service';
import { CreateSystemDto } from '../dto/create-system.dto';
import { UpdateSystemDto } from '../dto/update-system.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageCommon } from 'src/common/images/images.common';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Role } from 'src/modules/users/permissions/decorator/role.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guards';
import { PermissionGuard } from 'src/modules/users/permissions/guards/permission.guard';

@Controller('systems')
@ApiTags('Systems Controller')
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  // @Permissions('systems.create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('image',{
      dest:'./uploads/system_images',
      storage:diskStorage({
        destination:'./uploads/system_images',
        filename:ImageCommon.editFileName,
      }),
      fileFilter:ImageCommon.imageFileFilter,
    })
  )
  create(@Body() createSystemDto: CreateSystemDto,
  @UploadedFile() file:Express.Multer.File) {
    return this.systemsService.create(createSystemDto,file);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  
  // @Permissions('systems.read')
  async findAll() {
    var response = [];
    var systems = await this.systemsService.findAll();
    systems = systems.filter((system) => {
      if(system.active == 1) return system;
    })

    return systems;
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('systems.read')
  findOne(@Param('id') id: string) {
    return this.systemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('systems.update')
  update(@Param('id') id: string, @Body() updateSystemDto: UpdateSystemDto) {
    return this.systemsService.update(+id, updateSystemDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)

  // @Permissions('systems.delete')
  remove(@Param('id') id: string) {
    return this.systemsService.remove(+id);
  }
}
