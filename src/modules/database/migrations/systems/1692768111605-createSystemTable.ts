import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName ='systems'


export class CreateSystemTable1692768111605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:tableName,
                columns:[
                    {
                        name:'id',
                        type:'integer',
                        isNullable:false,
                        isGenerated:true,
                        isPrimary:true,
                    },
                    {
                        name:"name",
                        type:'varchar',
                        isNullable:false,
                        length:'30',
                        isUnique:true,
                    },
                    {
                        name:'description',
                        type:'varchar',
                        isNullable:false,
                        length:'300',
                        
                    },
                    {
                        name:'url',
                        type:'varchar',
                        isNullable:false,
                        length:'200'
                    },
                    {
                        name:'link',
                        type:'varchar',
                        length:'250',
                        isNullable:false

                    },
                    {
                        name:'active',
                        type:'boolean',
                        isNullable:false
                    }
                ]

            }),true,true,true
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName,true,true,true);

    }

}
