import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv'
import { SeederOptions } from "typeorm-extension";
import { UserSeed } from "../seeds/users/users.seed";
import { UserRoleSeed } from "../seeds/users/user-role.seed";
import { RoleSeed } from "../seeds/roles/roles.seeds";
import { PermissionSeed } from "../seeds/permissions/permissions.seed";
import { RolePermissionsSeed } from "../seeds/permissions/permissions-role.seed";
import { SystemSeed } from "../seeds/systems/system.seed";
import { UserSystemSeed } from "../seeds/users/user-system.seed";



dotenv.config();
const dataSourceOption:DataSourceOptions & SeederOptions ={
    type: 'postgres',
    database:process.env.POSTGRES_DATABASE_NAME,
    host:process.env.POSTGRES_DATABASE_HOST,
    port:parseInt(process.env.POSTGRES_DATABASE_PORT),
    username:process.env.POSTGRES_DATABASE_USERNAME,
    password:process.env.POSTGRES_DATABASE_PASSWORD,
    migrations:['dist/modules/database/migrations/**/*.js'],
    entities:['dist/modules/**/*.entity.js'],
    synchronize:false,
    seeds:[UserSeed,UserRoleSeed,RoleSeed,SystemSeed,UserSystemSeed,PermissionSeed,RolePermissionsSeed],
};
const dataSource =new DataSource(dataSourceOption);
export default dataSource;

// P@ssword1234560