<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210108160118 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE trainer_achievement CHANGE `show` is_show TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE teachers DROP shorttitle');
        $this->addSql('ALTER TABLE trainer_video DROP FOREIGN KEY FK_31808B41FB08EDF6');
        $this->addSql('ALTER TABLE trainer_video ADD CONSTRAINT FK_31808B41FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES teachers (id)');
        $this->addSql('ALTER TABLE purse_history ADD amount INT NOT NULL, ADD status VARCHAR(255) NOT NULL, CHANGE operation operation VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE purse_history DROP operation');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE trainer_achievement CHANGE is_show `show` TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE teachers ADD shorttitle VARCHAR(500) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE trainer_video DROP FOREIGN KEY FK_31808B41FB08EDF6');
        $this->addSql('ALTER TABLE trainer_video ADD CONSTRAINT FK_31808B41FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE purse_history DROP amount, DROP status, CHANGE operation operation INT NOT NULL');
        $this->addSql('ALTER TABLE purse_history ADD operation VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
