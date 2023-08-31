import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

const permissionSeeder=[
    {
        name:'users.create'
    },
    {
        name:'users.read'
    },
    {
        name:'users.update'
    },
    {
        name:'users.delete'
    },
    {
        name:'systems.read'
    },
    {
        name:'systems.create'
    },
    {
        name:'systems.update'
    },
    {
        name:'systems.delete'
    },
    
]

export class PermissionSeed implements Seeder {
    
    async run (dataSource:DataSource,factoryManager:SeederFactoryManager):Promise<any>{
        const permissionRepo =dataSource.getRepository('permissions')
        const permissions =await permissionRepo.createQueryBuilder('permissions')
        .getMany()
        const entities =[];

        permissionSeeder.forEach((perm)=>{
            const permissionCheck =permissions.find(permission=>permission.name===perm.name)
            if(!permissionCheck){
                entities.push(perm)
            }
        })
        if(entities.length){
            await permissionRepo.save(entities)
        }
    }
}