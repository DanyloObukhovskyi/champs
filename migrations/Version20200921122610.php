<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200921122610 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE event_bracket (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, match_id INT DEFAULT NULL, team1_id INT DEFAULT NULL, team2_id INT DEFAULT NULL, score1 VARCHAR(255) DEFAULT NULL, score2 VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, INDEX IDX_C4598FC171F7E88B (event_id), INDEX IDX_C4598FC12ABEACD6 (match_id), INDEX IDX_C4598FC1E72BCFA4 (team1_id), INDEX IDX_C4598FC1F59E604A (team2_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC171F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC12ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC1E72BCFA4 FOREIGN KEY (team1_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC1F59E604A FOREIGN KEY (team2_id) REFERENCES team (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE event_bracket');
    }
}
