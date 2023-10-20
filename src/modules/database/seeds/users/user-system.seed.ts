import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";


export class UserSystemSeed implements Seeder {
     async run(dataSource:DataSource,factoryManager:SeederFactoryManager):Promise<any>{
        const userRepo=dataSource.getRepository('users');
        const systemRepo=dataSource.getMongoRepository('systems');
        const manager = dataSource.createEntityManager();
        const superUser =await userRepo.findOneBy({
            username:'Yenish'
        })
        const systems =await systemRepo.findOneBy({
            name:'Alert'
        })
        const connection = manager.connection

        const userSystemCheck =await connection.createQueryBuilder()
        .select()
        .from('users_systems',null)
        .where('users_systems.user_id=:userId',{userId:superUser.id})
        .andWhere('users_systems.system_id=:systemId',{systemId:systems.id})
        .getRawOne()
        if(!userSystemCheck){
            await connection.createQueryBuilder()
            .insert()
            .into('users_systems',['system_id','user_id'])
            .values({system_id:systems.id,user_id:superUser.id})
            .execute()
        }
     }
}