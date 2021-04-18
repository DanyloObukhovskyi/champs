<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210418141611 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE match_map_team_statistic DROP FOREIGN KEY FK_3A723D65296CD8AE');

        $this->addSql('ALTER TABLE past_match DROP FOREIGN KEY FK_25829278296CD8AE');

        $this->addSql('ALTER TABLE event_bracket DROP FOREIGN KEY FK_C4598FC1E72BCFA4');
        $this->addSql('ALTER TABLE event_bracket DROP FOREIGN KEY FK_C4598FC1F59E604A');

        $this->addSql('ALTER TABLE event_group DROP FOREIGN KEY FK_2CDBF5E9296CD8AE');

        $this->addSql('ALTER TABLE event_prize_distribution DROP FOREIGN KEY FK_58AB1B28296CD8AE');

        $this->addSql('ALTER TABLE event_team_attending DROP FOREIGN KEY FK_50BC3763296CD8AE');

        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC505E72BCFA4');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC505F59E604A');

        $this->addSql('ALTER TABLE match_pick_and_ban DROP FOREIGN KEY FK_543D7138296CD8AE');

        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65296CD8AE');

        $this->addSql('ALTER TABLE rating_team DROP FOREIGN KEY FK_98359A296CD8AE');

        $this->addSql('ALTER TABLE past_match ADD CONSTRAINT FK_25829278296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC1E72BCFA4 FOREIGN KEY (team1_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC1F59E604A FOREIGN KEY (team2_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E9296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE event_prize_distribution ADD CONSTRAINT FK_58AB1B28296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE event_team_attending ADD CONSTRAINT FK_50BC3763296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC505E72BCFA4 FOREIGN KEY (team1_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC505F59E604A FOREIGN KEY (team2_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE match_pick_and_ban ADD CONSTRAINT FK_543D7138296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

        $this->addSql('ALTER TABLE rating_team ADD CONSTRAINT FK_98359A296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_map_team_statistic ADD CONSTRAINT FK_3A723D65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
