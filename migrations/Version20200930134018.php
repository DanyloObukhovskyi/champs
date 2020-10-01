<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200930134018 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE lesson_time (id INT AUTO_INCREMENT NOT NULL, lesson_id INT DEFAULT NULL, trainer_time_id INT DEFAULT NULL, INDEX IDX_56E55E21CDF80196 (lesson_id), INDEX IDX_56E55E2192D5E4F4 (trainer_time_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lesson_time ADD CONSTRAINT FK_56E55E21CDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
        $this->addSql('ALTER TABLE lesson_time ADD CONSTRAINT FK_56E55E2192D5E4F4 FOREIGN KEY (trainer_time_id) REFERENCES schedule (id)');
        $this->addSql('DROP INDEX IDX_3F4218D93203CF3A ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D9F773E7CA ON lessons');
        $this->addSql('ALTER TABLE lessons CHANGE trainer_id_id trainer_id INTEGER;');
        $this->addSql('ALTER TABLE lessons CHANGE student_id_id student_id INTEGER;');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9CB944F1A FOREIGN KEY (student_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9CB944F1A ON lessons (student_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9FB08EDF6 ON lessons (trainer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE lesson_time');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9CB944F1A');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9FB08EDF6');
        $this->addSql('DROP INDEX IDX_3F4218D9CB944F1A ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D9FB08EDF6 ON lessons');
        $this->addSql('ALTER TABLE lessons CHANGE trainer_id trainer_id_id INTEGER;');
        $this->addSql('ALTER TABLE lessons CHANGE student_id student_id_id INTEGER;');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D93203CF3A FOREIGN KEY (trainer_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9F773E7CA FOREIGN KEY (student_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3F4218D93203CF3A ON lessons (trainer_id_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9F773E7CA ON lessons (student_id_id)');
    }
}
