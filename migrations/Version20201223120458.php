<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201223120458 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9F773E7CA');
        $this->addSql('DROP INDEX IDX_3F4218D93203CF3A ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D9F773E7CA ON lessons');
        $this->addSql('ALTER TABLE lessons ADD type VARCHAR(255) DEFAULT \'individual\'');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lessons DROP type');
        $this->addSql('CREATE INDEX IDX_3F4218D93203CF3A ON lessons (trainer_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9F773E7CA ON lessons (student_id)');
    }
}
