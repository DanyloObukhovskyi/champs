<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210311134807 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE player DROP INDEX UNIQ_98197A65217BBB47, ADD INDEX IDX_98197A65217BBB47 (person_id)');
        $this->addSql('ALTER TABLE player CHANGE person_id person_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE player DROP INDEX IDX_98197A65217BBB47, ADD UNIQUE INDEX UNIQ_98197A65217BBB47 (person_id)');
        $this->addSql('ALTER TABLE player CHANGE person_id person_id INT NOT NULL');
    }
}
