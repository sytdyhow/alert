import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'images'
})


export class ImageEntity {
    @PrimaryGeneratedColumn({
        name:'id',
        type:'integer'
    })
    id:number;

    @Column({
        name:'name',
        type:'varchar',
        length:'50',
        nullable:false,
        unique:true,
    })
    name:string;

    @Column({
        name:'link',
        type:'varchar',
        length:'255',
        nullable:false,

    })
    link:string;

    constructor(image?:Partial<ImageEntity>){
        Object.assign(this,image);

}
}