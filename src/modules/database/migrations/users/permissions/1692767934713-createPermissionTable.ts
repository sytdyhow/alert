import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName='permissions';

export class CreatePermissionTable1692767934713 implements MigrationInterface {

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
                        isUnique:true,
                    },
                    {
                        name:'name',
                        type:'varchar',
                        isNullable:false,
                        length:'30',
                        isUnique:true,
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);

    }

}
