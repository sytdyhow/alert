import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import * as bcrypt from "bcrypt"


const superUser={
    username:'Yenish',
    password:'gmail',
    active:true
    
    

}


export class UserSeed implements Seeder{
    async run(dataSource:DataSource,factoryManager:SeederFactoryManager):Promise<any>{
        const userRepo =dataSource.getRepository('users')
        const user=await userRepo.createQueryBuilder('use')
        .where('use.username=:username',{username:superUser.username})
        .getOne()
        if(!user){
            superUser.password=await bcrypt.hash(superUser.password,12)
            await userRepo.save(superUser);
        }
    }
}