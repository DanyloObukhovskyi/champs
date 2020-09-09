<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200909134159 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE event_group (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, team_id INT DEFAULT NULL, m VARCHAR(255) DEFAULT NULL, w VARCHAR(255) DEFAULT NULL, t VARCHAR(255) DEFAULT NULL, l VARCHAR(255) DEFAULT NULL, rd VARCHAR(255) DEFAULT NULL, p VARCHAR(255) DEFAULT NULL, group_name VARCHAR(255) DEFAULT NULL, INDEX IDX_2CDBF5E971F7E88B (event_id), INDEX IDX_2CDBF5E9296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event_map_pool (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, map_id INT DEFAULT NULL, INDEX IDX_7A55E7C371F7E88B (event_id), INDEX IDX_7A55E7C353C55F64 (map_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event_prize_distribution (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, team_id INT DEFAULT NULL, position VARCHAR(255) DEFAULT NULL, prize VARCHAR(255) DEFAULT NULL, INDEX IDX_58AB1B2871F7E88B (event_id), INDEX IDX_58AB1B28296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE related_event (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, related_id INT DEFAULT NULL, INDEX IDX_4B2FEC8C71F7E88B (event_id), INDEX IDX_4B2FEC8C4162C001 (related_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E971F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E9296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE event_map_pool ADD CONSTRAINT FK_7A55E7C371F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_map_pool ADD CONSTRAINT FK_7A55E7C353C55F64 FOREIGN KEY (map_id) REFERENCES map (id)');
        $this->addSql('ALTER TABLE event_prize_distribution ADD CONSTRAINT FK_58AB1B2871F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_prize_distribution ADD CONSTRAINT FK_58AB1B28296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE related_event ADD CONSTRAINT FK_4B2FEC8C71F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE related_event ADD CONSTRAINT FK_4B2FEC8C4162C001 FOREIGN KEY (related_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event ADD flag_icon_id INT DEFAULT NULL, ADD url VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7A580617D FOREIGN KEY (flag_icon_id) REFERENCES flag_icon (id)');
        $this->addSql('CREATE INDEX IDX_3BAE0AA7A580617D ON event (flag_icon_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE event_group');
        $this->addSql('DROP TABLE event_map_pool');
        $this->addSql('DROP TABLE event_prize_distribution');
        $this->addSql('DROP TABLE related_event');
        $this->addSql('DROP TABLE messenger_messages');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7A580617D');
        $this->addSql('DROP INDEX IDX_3BAE0AA7A580617D ON event');
        $this->addSql('ALTER TABLE event DROP flag_icon_id, DROP url');
    }
}
