<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201124193950 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news_comment ADD parent_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE news_comment ADD CONSTRAINT FK_C3904E8A727ACA70 FOREIGN KEY (parent_id) REFERENCES news_comment (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news_comment DROP FOREIGN KEY FK_C3904E8A727ACA70');
        $this->addSql('DROP INDEX IDX_C3904E8A727ACA70 ON news_comment');
        $this->addSql('ALTER TABLE news_comment DROP parent_id');
        $this->addSql('ALTER TABLE news_comment RENAME INDEX idx_c3904e8aa76ed395 TO FK_C3904E8AA76ED395');
     }
}
