import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCar1703112226478 implements MigrationInterface {
    name = 'CreateTableCar1703112226478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`car\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`color\` text NOT NULL, \`gas\` int NOT NULL, \`year\` int NOT NULL, \`description\` text NOT NULL, \`price\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`car\``);
    }

}
