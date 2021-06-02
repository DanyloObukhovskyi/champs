<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210415205453 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE trainer_banner_link DROP FOREIGN KEY FK_F18D4C737B294785');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649E48FD905');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649A3221957');

        $this->addSql('ALTER TABLE trainer_banner_link ADD CONSTRAINT FK_F18D4C737B294785 FOREIGN KEY (trainer_banner_id) REFERENCES trainer_banner (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649A3221957 FOREIGN KEY (additionally_game_id) REFERENCES game (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
