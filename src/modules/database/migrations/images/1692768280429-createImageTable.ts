import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName ='images'


export class CreateImageTable1692768280429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:tableName,
                columns:[
                    {
                        name:'id',
                        type:'integer',
                        isGenerated:true,
                        isNullable:false,
                        isPrimary:true,

                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'50',
                        isNullable:false,
                        isUnique:true,

                    },
                    {
                        name:'link',
                        type:'varchar',
                        length:'255',
                        isNullable:false
                        
                    },
                ],
            }),true,true,true
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName,true,true,true)

    }

}
