<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210218172344 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE payment ADD inter_kassa_id VARCHAR(255) DEFAULT NULL, CHANGE yandex_kassa_id yandex_kassa_id VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE payment ADD interkassa_data JSON NOT NULL');
        $this->addSql('ALTER TABLE payment CHANGE yandex_data yandex_data JSON DEFAULT NULL, CHANGE interkassa_data interkassa_data JSON DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE payment DROP inter_kassa_id, CHANGE yandex_kassa_id yandex_kassa_id VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE payment DROP interkassa_data');
        $this->addSql('ALTER TABLE payment CHANGE yandex_data yandex_data JSON NOT NULL, CHANGE interkassa_data interkassa_data JSON NOT NULL');
    }
}
