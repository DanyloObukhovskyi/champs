<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200902170300 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE event CHANGE command_count command_count VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE event_show ADD CONSTRAINT FK_2DC595AA71F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('CREATE INDEX IDX_2DC595AA71F7E88B ON event_show (event_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE event CHANGE command_count command_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE event_show DROP FOREIGN KEY FK_2DC595AA71F7E88B');
        $this->addSql('DROP INDEX IDX_2DC595AA71F7E88B ON event_show');
    }
}
