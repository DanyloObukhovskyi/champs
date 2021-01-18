<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210115141602 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE invite_prize (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, prize VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invite ADD prize_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE invite ADD CONSTRAINT FK_C7E210D7BBE43214 FOREIGN KEY (prize_id) REFERENCES invite_prize (id)');
        $this->addSql('CREATE INDEX IDX_C7E210D7BBE43214 ON invite (prize_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE invite_prize');
        $this->addSql('ALTER TABLE invite DROP FOREIGN KEY FK_C7E210D7A76ED395');
        $this->addSql('DROP INDEX IDX_C7E210D7BBE43214 ON invite');
        $this->addSql('ALTER TABLE invite drop prize_id');
    }
}
