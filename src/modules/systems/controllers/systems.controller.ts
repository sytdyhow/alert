import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SystemsService } from '../services/systems.service';
import { CreateSystemDto } from '../dto/create-system.dto';
import { UpdateSystemDto } from '../dto/update-system.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageCommon } from 'src/common/images/images.common';
import { Permissions } from 'src/common/decorators/permissions.decorator';

@Controller('systems')
@ApiTags('Systems Controller')
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Post()
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
  // @Permissions('systems.read')
  async findAll() {
    const systems = await this.systemsService.findAll();
    const response = systems.filter((system) => {
      if(system.active == true) return system;
    })
    return response;
  }

  @Get(':id')
  // @Permissions('systems.read')
  findOne(@Param('id') id: string) {
    return this.systemsService.findOne(+id);
  }

  @Patch(':id')
  // @Permissions('systems.update')
  update(@Param('id') id: string, @Body() updateSystemDto: UpdateSystemDto) {
    return this.systemsService.update(+id, updateSystemDto);
  }

  @Delete(':id')
  // @Permissions('systems.delete')
  remove(@Param('id') id: string) {
    return this.systemsService.remove(+id);
  }
}
