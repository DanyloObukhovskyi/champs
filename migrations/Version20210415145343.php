<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210415145343 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE referral_link DROP FOREIGN KEY FK_25FEEC23E48FD905');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7E48FD905');
        $this->addSql('ALTER TABLE game_rank DROP FOREIGN KEY FK_636C84C9E48FD905');
        $this->addSql('ALTER TABLE marketplace_banner DROP FOREIGN KEY FK_8781AF6BE48FD905');
        $this->addSql('ALTER TABLE match_pick_and_ban DROP FOREIGN KEY FK_543D7138E48FD905');
        $this->addSql('ALTER TABLE news DROP FOREIGN KEY FK_1DD39950E48FD905');
        $this->addSql('ALTER TABLE trainer_banner DROP FOREIGN KEY FK_5CD3E253E48FD905');
        $this->addSql('ALTER TABLE referral_link ADD CONSTRAINT FK_25FEEC23E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_rank ADD CONSTRAINT FK_636C84C9E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE marketplace_banner ADD CONSTRAINT FK_8781AF6BE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_pick_and_ban ADD CONSTRAINT FK_543D7138E48FD905 FOREIGN KEY (game_id) REFERENCES `match` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE news ADD CONSTRAINT FK_1DD39950E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE trainer_banner ADD CONSTRAINT FK_5CD3E253E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
