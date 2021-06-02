<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210415194725 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news_bookmark DROP FOREIGN KEY FK_935C314CB5A459A0');
        $this->addSql('ALTER TABLE news_comment DROP FOREIGN KEY FK_C3904E8AB5A459A0');
        $this->addSql('ALTER TABLE news_like DROP FOREIGN KEY FK_79BEB638B5A459A0');
        $this->addSql('ALTER TABLE news_tag DROP FOREIGN KEY FK_BE3ED8A1B5A459A0');
        $this->addSql('ALTER TABLE news_bookmark ADD CONSTRAINT FK_935C314CB5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE news_comment ADD CONSTRAINT FK_C3904E8AB5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE news_like ADD CONSTRAINT FK_79BEB638B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE news_tag ADD CONSTRAINT FK_BE3ED8A1B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_bracket DROP FOREIGN KEY FK_C4598FC171F7E88B');
        $this->addSql('ALTER TABLE event_group DROP FOREIGN KEY FK_2CDBF5E971F7E88B');
        $this->addSql('ALTER TABLE event_map_pool DROP FOREIGN KEY FK_7A55E7C371F7E88B');
        $this->addSql('ALTER TABLE event_prize_distribution DROP FOREIGN KEY FK_58AB1B2871F7E88B');
        $this->addSql('ALTER TABLE event_show DROP FOREIGN KEY FK_2DC595AA71F7E88B');
        $this->addSql('ALTER TABLE event_stream DROP FOREIGN KEY FK_C270C94E71F7E88B');
        $this->addSql('ALTER TABLE event_team_attending DROP FOREIGN KEY FK_50BC376371F7E88B');
        $this->addSql('ALTER TABLE event_bracket ADD CONSTRAINT FK_C4598FC171F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E971F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_map_pool ADD CONSTRAINT FK_7A55E7C371F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_prize_distribution ADD CONSTRAINT FK_58AB1B2871F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_show ADD CONSTRAINT FK_2DC595AA71F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_stream ADD CONSTRAINT FK_C270C94E71F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_team_attending ADD CONSTRAINT FK_50BC376371F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
