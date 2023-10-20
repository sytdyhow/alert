import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { sys } from "typescript";

const systems ={
    name:'Alert',
    description:'icerki maglumat',
    url:'udp/',
    link:'ldp',
    active:true

}

export class SystemSeed implements Seeder{
async run( dataSource:DataSource,factoryManager:SeederFactoryManager):Promise<any>{
    const  systemRepo=dataSource.getRepository('systems')
    const  system =await systemRepo.createQueryBuilder('sys')
    .where('sys.name=:name',{name:systems.name})
    .andWhere('sys.description=:description',{description:systems.description})
    .andWhere('sys.url=:url',{url:systems.url})
    .andWhere('sys.link=:link',{link:systems.link})
    .andWhere('sys.active=:active',{active:systems.active})
    systemRepo.save(system)
}
}

