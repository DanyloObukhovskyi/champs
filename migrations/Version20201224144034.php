<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201224144034 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD rank_string VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD timezone VARCHAR(255) DEFAULT \'Europe/Moscow\' NOT NULL');
        $this->addSql('ALTER TABLE user ADD rang VARCHAR(20) DEFAULT NULL, DROP `rank`');
        $this->addSql('ALTER TABLE user ADD game_id INT DEFAULT NULL, DROP game');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649E48FD905 ON user (game_id)');
        $this->addSql('ALTER TABLE lessons ADD trainer_notice VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user drop rank_string');
        $this->addSql('ALTER TABLE user DROP timezone');
        $this->addSql('ALTER TABLE user ADD rank VARCHAR(20) DEFAULT NULL, DROP `rang`');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E48FD905');
        $this->addSql('DROP INDEX IDX_8D93D649E48FD905 ON user');
        $this->addSql('ALTER TABLE user ADD game VARCHAR(25) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE lessons DROP trainer_notice');
    }
}
