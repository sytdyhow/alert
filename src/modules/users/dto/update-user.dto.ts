import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // newPassword?:string;

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
    newPassword?:string;

}
