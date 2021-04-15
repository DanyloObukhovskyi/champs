<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210415202504 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE related_event DROP FOREIGN KEY FK_4B2FEC8C71F7E88B');
        $this->addSql('ALTER TABLE related_event DROP FOREIGN KEY FK_4B2FEC8C4162C001');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC50571F7E88B');

        $this->addSql('ALTER TABLE match_comment DROP FOREIGN KEY FK_E3D20D032ABEACD6');
        $this->addSql('ALTER TABLE match_map_team_statistic DROP FOREIGN KEY FK_3A723D652ABEACD6');
        $this->addSql('ALTER TABLE event_bracket DROP FOREIGN KEY FK_C4598FC12ABEACD6');
        $this->addSql('ALTER TABLE past_match DROP FOREIGN KEY FK_258292782ABEACD6');
        $this->addSql('ALTER TABLE result DROP FOREIGN KEY FK_136AC1132ABEACD6');
        $this->addSql('ALTER TABLE match_statistics DROP FOREIGN KEY FK_A3CE400E81FA53F0');
        $this->addSql('ALTER TABLE player_statistics DROP FOREIGN KEY FK_BD760F1F81FA53F0');
        $this->addSql('ALTER TABLE stream DROP FOREIGN KEY FK_F0E9BE1C81FA53F0');

        $this->addSql('ALTER TABLE related_event ADD CONSTRAINT FK_4B2FEC8C71F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE related_event ADD CONSTRAINT FK_4B2FEC8C4162C001 FOREIGN KEY (related_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC50571F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE match_comment ADD CONSTRAINT FK_E3D20D032ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_map_team_statistic ADD CONSTRAINT FK_3A723D652ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC12ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE past_match ADD CONSTRAINT FK_258292782ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE result ADD CONSTRAINT FK_136AC1132ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_statistics ADD CONSTRAINT FK_A3CE400E81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_statistics ADD CONSTRAINT FK_BD760F1F81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stream ADD CONSTRAINT FK_F0E9BE1C81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id) ON DELETE CASCADE');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
