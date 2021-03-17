<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210316151951 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE event_stream (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, country_id INT DEFAULT NULL, flag_icon_id INT DEFAULT NULL, INDEX IDX_C270C94E71F7E88B (event_id), INDEX IDX_C270C94EF92F3E70 (country_id), INDEX IDX_C270C94EA580617D (flag_icon_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE event_stream ADD CONSTRAINT FK_C270C94E71F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_stream ADD CONSTRAINT FK_C270C94EF92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE event_stream ADD CONSTRAINT FK_C270C94EA580617D FOREIGN KEY (flag_icon_id) REFERENCES flag_icon (id)');
        $this->addSql('ALTER TABLE event_stream ADD stream VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE event_stream DROP FOREIGN KEY FK_C270C94EF92F3E70');
        $this->addSql('DROP INDEX IDX_C270C94EF92F3E70 ON event_stream');
        $this->addSql('ALTER TABLE event_stream DROP country_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE event_stream');
    }
}
