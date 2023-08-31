import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName ='roles';


export class CreateRoleTable1692767711479 implements MigrationInterface {

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
                                    name:'name',
                                    type:'varchar',
                                    isNullable:false,
                                    isUnique:true
                                }
                            ]
                        })
                    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
              await queryRunner.dropTable(tableName);

    }

}
