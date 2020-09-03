<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200903075049 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE flag_icon (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, orig_name VARCHAR(255) NOT NULL, extension VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE team ADD flag_icon_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61FA580617D FOREIGN KEY (flag_icon_id) REFERENCES flag_icon (id)');
        $this->addSql('CREATE INDEX IDX_C4E0A61FA580617D ON team (flag_icon_id)');
        $this->addSql('ALTER TABLE person ADD parse_photo_date DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD flag_icon_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD176A580617D FOREIGN KEY (flag_icon_id) REFERENCES flag_icon (id)');
        $this->addSql('CREATE INDEX IDX_34DCD176A580617D ON person (flag_icon_id)');
        $this->addSql('ALTER TABLE map ADD image VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE map CHANGE image image VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE team ADD parse_logo_date DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE flag_icon');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61FA580617D');
        $this->addSql('DROP INDEX IDX_C4E0A61FA580617D ON team');
        $this->addSql('ALTER TABLE team DROP flag_icon_id');
        $this->addSql('ALTER TABLE person DROP parse_photo_date');
        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD176A580617D');
        $this->addSql('DROP INDEX IDX_34DCD176A580617D ON person');
        $this->addSql('ALTER TABLE person DROP flag_icon_id');
        $this->addSql('ALTER TABLE map DROP image');
        $this->addSql('ALTER TABLE map CHANGE image image VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE team DROP parse_logo_date');
    }
}
