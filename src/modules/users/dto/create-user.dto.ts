import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IS_LOWERCASE, IsNotEmpty, IsString, Matches, MinLength, isLowercase } from "class-validator";

export class CreateUserDto {
   
@ApiProperty({
    type:String,
    required:true,
    nullable:false,
    default:''
})
@IsString()
@IsNotEmpty()
@Transform(({ value }) => value.toLowerCase())
username:string;

@ApiProperty({
    type:String,
    required:true,
    nullable:false,
    default:'',
})
@IsString()
@IsNotEmpty()
@MinLength(8, { message: 'Parol azyndan 8 simwoldan ybarat bolmaly' })
@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
  message:
    'Parolda azyndan bir baş harp, bir kiçi harp, bir san we bir aýratyn nyşan bolmaly',
})
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
