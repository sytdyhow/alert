import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName = 'users'


export class CreateUserTable1692767785780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:tableName,
                columns:[
                    {
                        name:'id',
                        type:'integer',
                        isGenerated:true,
                        isPrimary:true,
                        isUnique:true
                    },
                    {
                        name:'username',
                        type:'varchar',
                        length:'50',
                        isNullable:false,
                        isUnique:true,
                    },
                    {
                        name:'password',
                        type:'varchar',
                        length:'250',
                        isNullable:false,
                        
                    },
                    {
                        name:'active',
                        type:'boolean',
                        isNullable:false,
                    }
                ],
            }),true,true,true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(tableName,true,true,true);

    }

}
