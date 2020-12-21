<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201216134519 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teachers DROP shorttitle');
        $this->addSql('ALTER TABLE teachers DROP videolink');
        $this->addSql('ALTER TABLE teachers DROP cost');
        $this->addSql('CREATE TABLE trainer_lesson_price (id INT AUTO_INCREMENT NOT NULL, trainer_id INT DEFAULT NULL, lesson_type VARCHAR(255) NOT NULL, price INT NOT NULL, INDEX IDX_2E300490FB08EDF6 (trainer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE trainer_lesson_price ADD is_active TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE setting CHANGE value value LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE trainer_lesson_price ADD CONSTRAINT FK_2E300490FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES teachers (id)');
        $this->addSql('ALTER TABLE teachers ADD global_elite TINYINT(1) DEFAULT \'0\' NOT NULL, DROP is_provide_training');
        $this->addSql('ALTER TABLE teachers ADD shorttitle VARCHAR(500) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teachers ADD videolink VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE teachers ADD cost INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trainer_lesson_price DROP is_active');
        $this->addSql('ALTER TABLE setting CHANGE value value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP TABLE trainer_lesson_price');
        $this->addSql('ALTER TABLE teachers  ADD is_provide_training TINYINT(1) DEFAULT \'1\' NOT NULL, DROP global_elite');

    }
}