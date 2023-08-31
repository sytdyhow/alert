import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName ='users_systems';
const userTableName ='users';
const systemTableName='systems';


export class CreateUsserSystemTable1692768212542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:tableName,
                columns:[
                    {
                        name:'user_id',
                        type:'integer',
                        isNullable:false
                    },
                    {
                        name:'system_id',
                        type:'integer',
                        isNullable:false

                    }
                ],
                foreignKeys:[
                    {
                        columnNames:['user_id'],
                        referencedColumnNames:['id'],
                        referencedTableName:userTableName
                    },
                    {
                        columnNames:['system_id'],
                        referencedColumnNames:['id'],
                        referencedTableName:systemTableName,
                    }
                ],
                uniques:[
                    {
                        columnNames:['user_id','system_id']
                    }
                ]
            }),true,true,true
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName,true,true,true);

    }

}
