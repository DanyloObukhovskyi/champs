<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126085158 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE match_comment (id INT AUTO_INCREMENT NOT NULL, match_id INT DEFAULT NULL, user_id INT DEFAULT NULL, parent_id INT DEFAULT NULL, comment LONGTEXT NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_E3D20D032ABEACD6 (match_id), INDEX IDX_E3D20D03A76ED395 (user_id), INDEX IDX_E3D20D03727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_comment_like (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, comment_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_BFD2D3D4A76ED395 (user_id), INDEX IDX_BFD2D3D4F8697D13 (comment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE match_comment ADD CONSTRAINT FK_E3D20D032ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE match_comment ADD CONSTRAINT FK_E3D20D03A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE match_comment ADD CONSTRAINT FK_E3D20D03727ACA70 FOREIGN KEY (parent_id) REFERENCES match_comment (id)');
        $this->addSql('ALTER TABLE match_comment_like ADD CONSTRAINT FK_BFD2D3D4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE match_comment_like ADD CONSTRAINT FK_BFD2D3D4F8697D13 FOREIGN KEY (comment_id) REFERENCES match_comment (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE match_comment DROP FOREIGN KEY FK_E3D20D03727ACA70');
        $this->addSql('ALTER TABLE match_comment_like DROP FOREIGN KEY FK_BFD2D3D4F8697D13');
        $this->addSql('DROP TABLE match_comment');
        $this->addSql('DROP TABLE match_comment_like');
    }
}
