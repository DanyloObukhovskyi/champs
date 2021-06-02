<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210312133052 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news_comment DROP FOREIGN KEY FK_C3904E8A727ACA70');
        $this->addSql('DROP INDEX IDX_C3904E8A727ACA70 ON news_comment');
        $this->addSql('ALTER TABLE news_comment ADD CONSTRAINT FK_C3904E8A727ACA70 FOREIGN KEY (parent_id) REFERENCES news_comment (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news_comment DROP FOREIGN KEY FK_C3904E8A727ACA70');
        $this->addSql('DROP INDEX IDX_C3904E8A727ACA70 ON news_comment');
        $this->addSql('ALTER TABLE news_comment ADD CONSTRAINT FK_C3904E8A727ACA70 FOREIGN KEY (parent_id) REFERENCES news_comment (id)');
    }
}
