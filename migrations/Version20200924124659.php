<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200924124659 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE lessons_payment (id INT AUTO_INCREMENT NOT NULL, payment_id INT DEFAULT NULL, lesson_id INT DEFAULT NULL, INDEX IDX_35E25EDE4C3A3BB (payment_id), INDEX IDX_35E25EDECDF80196 (lesson_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lessons_payment ADD CONSTRAINT FK_35E25EDE4C3A3BB FOREIGN KEY (payment_id) REFERENCES payment (id)');
        $this->addSql('ALTER TABLE lessons_payment ADD CONSTRAINT FK_35E25EDECDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
  }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE lessons_payment');
    }
}
