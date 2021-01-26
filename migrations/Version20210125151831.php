<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210125151831 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE trainer_banner (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, text LONGTEXT NOT NULL, img VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trainer_banner_link (id INT AUTO_INCREMENT NOT NULL, trainer_banner_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, INDEX IDX_F18D4C737B294785 (trainer_banner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE trainer_banner_link ADD CONSTRAINT FK_F18D4C737B294785 FOREIGN KEY (trainer_banner_id) REFERENCES trainer_banner (id)');
        $this->addSql('ALTER TABLE trainer_banner ADD game_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trainer_banner ADD CONSTRAINT FK_5CD3E253E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_5CD3E253E48FD905 ON trainer_banner (game_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE trainer_banner');
        $this->addSql('DROP TABLE trainer_banner_link');
        $this->addSql('ALTER TABLE trainer_banner DROP FOREIGN KEY FK_5CD3E253E48FD905');
        $this->addSql('DROP INDEX IDX_5CD3E253E48FD905 ON trainer_banner');
        $this->addSql('ALTER TABLE trainer_banner DROP game_id');
    }
}
