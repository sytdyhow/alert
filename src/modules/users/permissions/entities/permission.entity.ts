import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../../roles/entities/role.entity";

@Entity({
    name:'permissions'
})

export class PermissionEntity {
@PrimaryGeneratedColumn({
    name:'id',
    type:'integer'
})
id:number;

@Column({
    name:'name',
    type:'varchar',
    nullable:false,
    length:30,
    unique:true
})
name:string;



@ManyToMany(()=>RoleEntity,(roles)=>roles.permissions)
@JoinTable({
    name:'roles_permissions',
    joinColumn:{
        name:'permission_id',
        referencedColumnName:'id'
    },
    inverseJoinColumn:{
        name:'role_id',
        referencedColumnName:'id'
    }
    
})
roles:RoleEntity[];

}
