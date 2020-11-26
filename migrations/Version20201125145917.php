<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201125145917 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE news_comment_like (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, comment_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_6C1F8BE8A76ED395 (user_id), INDEX IDX_6C1F8BE8F8697D13 (comment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE news_comment_like ADD CONSTRAINT FK_6C1F8BE8A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE news_comment_like ADD CONSTRAINT FK_6C1F8BE8F8697D13 FOREIGN KEY (comment_id) REFERENCES news_comment (id)');
        $this->addSql('ALTER TABLE news_comment RENAME INDEX fk_c3904e8a727aca70 TO IDX_C3904E8A727ACA70');
        $this->addSql('ALTER TABLE news_comment RENAME INDEX fk_c3904e8aa76ed395 TO IDX_C3904E8AA76ED395');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE news_comment_like');
        $this->addSql('ALTER TABLE news_comment RENAME INDEX idx_c3904e8aa76ed395 TO FK_C3904E8AA76ED395');
        $this->addSql('ALTER TABLE news_comment RENAME INDEX idx_c3904e8a727aca70 TO FK_C3904E8A727ACA70');
    }
}
