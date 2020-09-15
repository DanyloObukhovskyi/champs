<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200914122842 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE event_team_attending (id INT AUTO_INCREMENT NOT NULL, team_id INT DEFAULT NULL, event_id INT DEFAULT NULL, number VARCHAR(255) NOT NULL, INDEX IDX_50BC3763296CD8AE (team_id), INDEX IDX_50BC376371F7E88B (event_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE event_team_attending ADD CONSTRAINT FK_50BC3763296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE event_team_attending ADD CONSTRAINT FK_50BC376371F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9CB944F1A');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9FB08EDF6');
        $this->addSql('DROP INDEX IDX_3F4218D9FB08EDF6 ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D9CB944F1A ON lessons');
        $this->addSql('ALTER TABLE lessons ADD student_id_id INT DEFAULT NULL, ADD trainer_id_id INT DEFAULT NULL, DROP student_id, DROP trainer_id');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9F773E7CA FOREIGN KEY (student_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D93203CF3A FOREIGN KEY (trainer_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9F773E7CA ON lessons (student_id_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D93203CF3A ON lessons (trainer_id_id)');
        $this->addSql('ALTER TABLE payment DROP checked');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE event_team_attending');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9F773E7CA');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D93203CF3A');
        $this->addSql('DROP INDEX IDX_3F4218D9F773E7CA ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D93203CF3A ON lessons');
        $this->addSql('ALTER TABLE lessons ADD student_id INT DEFAULT NULL, ADD trainer_id INT DEFAULT NULL, DROP student_id_id, DROP trainer_id_id');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9CB944F1A FOREIGN KEY (student_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9FB08EDF6 ON lessons (trainer_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9CB944F1A ON lessons (student_id)');
        $this->addSql('ALTER TABLE payment ADD checked TINYINT(1) DEFAULT NULL');
    }
}
