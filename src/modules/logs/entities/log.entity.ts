// import { hostname } from "os";
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


// @Entity({
//     name:'logs'
// })

// export class LogEntity {

//     @PrimaryGeneratedColumn({
//         name:"id",
//         type:'integer'
//     })
//     id:number;

//     @Column({
//         name:'hostname',
//         type:'varchar',
//         nullable:false,
//         length:'20'
//     })
//     hostname:string;

//     @Column({
//         name:'severity',
//         type:'varchar',
//         nullable:false,
//         length:'20'
//     })
//     severity:string;


//     @Column({
//         name:'facility',
//         type:'varchar',
//         nullable:false,
//         length:'20'
//     })
//     facility:string;


    
//     @Column({
//         name:'application',
//         type:'varchar',
//         nullable:false,
//         length:'20'
//     })
//     application:string;


    
    
//     @Column({
//         name:'message',
//         type:'varchar',
//         nullable:false,
//         length:'200'
//     })
//     message:string;


    
    
//     @Column({
//         name:'role',
//         type:'varchar',
//         nullable:false,
//         length:'20'
//     })
//     role:string;


    
    
//     @Column({
//         name:'is_know',
//         type:'boolean',
//         nullable:false,
//         length:'10'
//     })
//     is_know:boolean;

    
//     @Column({
//         name:'text_message',
//         type:'varchar',
//         nullable:false,
//         length:'250'
//     })
//     text_message:string;


// }
