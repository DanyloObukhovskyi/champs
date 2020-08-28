<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200628095400 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE lessons (id INT AUTO_INCREMENT NOT NULL, student_id INT NOT NULL, trainer_id INT NOT NULL, datetime DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE schledule (id INT AUTO_INCREMENT NOT NULL, trainer_id INT NOT NULL, date DATE NOT NULL, time10_11 SMALLINT NOT NULL, time11_12 SMALLINT NOT NULL, time12_13 SMALLINT NOT NULL, time13_14 SMALLINT NOT NULL, time14_15 SMALLINT NOT NULL, time15_16 SMALLINT NOT NULL, time16_17 SMALLINT NOT NULL, time17_18 SMALLINT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE lessons');
        $this->addSql('DROP TABLE schledule');
    }
}
