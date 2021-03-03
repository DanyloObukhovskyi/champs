<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210303121245 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blog_post_tag DROP FOREIGN KEY FK_2E931ED74B89032C');
        $this->addSql('ALTER TABLE event CHANGE status status VARCHAR(255) DEFAULT \'pro\'');
        $this->addSql('ALTER TABLE news RENAME INDEX fk_1dd39950e48fd905 TO IDX_1DD39950E48FD905');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mvp_team_user DROP FOREIGN KEY FK_819A611CC335BA63');
        $this->addSql('ALTER TABLE blog_post ADD CONSTRAINT FK_BA5AE01DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE blog_post_tag ADD CONSTRAINT FK_2E931ED74B89032C FOREIGN KEY (post_id) REFERENCES blog_post (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE event CHANGE status status VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE news RENAME INDEX idx_1dd39950e48fd905 TO FK_1DD39950E48FD905');
    }
}
