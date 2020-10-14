<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201013123155 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE mvp_team_user (mvp_team_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_819A611CC335BA63 (mvp_team_id), INDEX IDX_819A611CA76ED395 (user_id), PRIMARY KEY(mvp_team_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE mvp_team_user ADD CONSTRAINT FK_819A611CC335BA63 FOREIGN KEY (mvp_team_id) REFERENCES mvp_team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE mvp_team_user ADD CONSTRAINT FK_819A611CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE mvp_team_user');
    }
}
