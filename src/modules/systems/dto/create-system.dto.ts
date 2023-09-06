import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSystemDto {

    @ApiProperty({
        type:String,
        nullable:false,
        required:true,
    })
    @IsString()
    @IsNotEmpty()
    name:string;


    @ApiProperty({
        type:String,
        nullable:false,
        required:true,
    })
    @IsString()
    @IsNotEmpty()
    description:string;

    @ApiProperty({
        type:String,
        nullable:false,
        required:true,
    })
    @IsString()
    @IsNotEmpty()
    url:string;

    @ApiProperty({
        type:String,
        format:'binary',
        required:true,
        nullable:false
    })
    image:Express.Multer.File;

    @ApiProperty({
        type:Number,
        nullable:false,
        required:true,
    })
    active:number;
    


}
