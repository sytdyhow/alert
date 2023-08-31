import { type } from "os";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../roles/entities/role.entity";
import { SystemEntity } from "src/modules/systems/entities/system.entity";


@Entity({
    name:'users'
})


export class UserEntity {


    @PrimaryGeneratedColumn({
        name:'id',
        type:'integer'
    })
    id:number;


    @Column({
        name : 'username',
        type:'varchar',
        length:20,
        nullable:false,
        unique:true
    })
    username:string;

    @Column({
        name:'password',
        type:'varchar',
        length:300,
        nullable:false
    })
    password:string;

    @Column({
        name:'active',
        type:'boolean',
        nullable:false
    })
    active:boolean;


    @ManyToMany(()=>RoleEntity,(roles)=>roles.users)
    roles:RoleEntity[];

    @ManyToMany(()=>SystemEntity,(systems)=>systems.userss)
    systems:SystemEntity[];

    constructor(user?:Partial<UserEntity>){
        Object.assign(this,user)
    }

}
