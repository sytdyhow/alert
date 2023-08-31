import { UserEntity } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'systems'
})

export class SystemEntity {
    
    @PrimaryGeneratedColumn({
        name:'id',
        type:'integer'
    })
    id:number;

    @Column({
        name:'name',
        type:'varchar',
        nullable:false,
        length:'50',
        unique:true,
    })
    name:string;
    @Column({
        name:'description',
        type:'varchar',
        length:'250',
        nullable:false,
        })
    description:string;

    @Column({
        name:'url',
        type:'varchar',
        length:'200',
        nullable:false
    })
    url:string;

    @Column({
        name:'link',
        type:'varchar',
        length:'255',
        nullable:false,

    })
    link:string;
    @Column({
        name:'active',
        type:'boolean',
        nullable:false,
    })
    active:boolean;

0
    @ManyToMany(()=>UserEntity,(userss)=>userss.systems)
    @JoinTable({
        name:'users_systems',
        joinColumn:{
            name:'system_id',
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:'user_id',
            referencedColumnName:'id',
        },
    })
    userss:UserEntity[];

    constructor(system?:Partial<SystemEntity>){
        Object.assign(this,system);
    }
}


