import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
   
@ApiProperty({
    type:String,
    required:true,
    nullable:false,
    default:''
})
@IsString()
@IsNotEmpty()
username:string;

@ApiProperty({
    type:String,
    required:true,
    nullable:false,
    default:'',
})
@IsString()
@IsNotEmpty()
password:string;


@ApiProperty({
    type:[Number],
    required:true,
    nullable:false,
})
roleIds:number[];

@ApiProperty({
    type:[Number],
    required:true,
    nullable:false,
})
systemIds:number[];

@ApiProperty({
    type:Boolean,
    required:true,
    nullable:false
})
active:boolean

}
