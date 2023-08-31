import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards, UploadedFile } from '@nestjs/common';
import { ImagesService } from '../services/images.service';
import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageCommon } from 'src/common/images/images.common';
import { Role } from 'src/modules/users/permissions/decorator/role.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guards';
import { PermissionGuard } from 'src/modules/users/permissions/guards/permission.guard';

@Controller('images')
@ApiTags('Image Controller')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('image',  {
      dest:'./uploads/images',
      storage:diskStorage({
        destination:'./uploads/images',
        filename:ImageCommon.editFileName,
      })
    })
  )
  create(@Body() createImageDto: CreateImageDto,
  @UploadedFile() file:Express.Multer.File) {
    return this.imagesService.create(createImageDto ,file);
  }


  @Get()
  @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  // @Role('')
  // @UseGuards(JwtAuthGuard,PermissionGuard)
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
