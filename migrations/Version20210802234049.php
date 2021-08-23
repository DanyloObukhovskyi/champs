<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210802234049 extends AbstractMigration
{

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE blog_comment (id INT AUTO_INCREMENT NOT NULL, blog_id INT NOT NULL, user_id INT NOT NULL, parent_id INT DEFAULT NULL, comment VARCHAR(255) DEFAULT NULL, INDEX IDX_7882EFEFDAE07E97 (blog_id), INDEX IDX_7882EFEFA76ED395 (user_id), UNIQUE INDEX UNIQ_7882EFEF727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blog_comment_likes (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, comment_id INT NOT NULL, type VARCHAR(255) DEFAULT NULL, INDEX IDX_93D61CE0A76ED395 (user_id), UNIQUE INDEX UNIQ_93D61CE0F8697D13 (comment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE blog_comment ADD CONSTRAINT FK_7882EFEFDAE07E97 FOREIGN KEY (blog_id) REFERENCES blogs (id)');
        $this->addSql('ALTER TABLE blog_comment ADD CONSTRAINT FK_7882EFEFA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE blog_comment ADD CONSTRAINT FK_7882EFEF727ACA70 FOREIGN KEY (parent_id) REFERENCES blog_comment (id)');
        $this->addSql('ALTER TABLE blog_comment_likes ADD CONSTRAINT FK_93D61CE0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE blog_comment_likes ADD CONSTRAINT FK_93D61CE0F8697D13 FOREIGN KEY (comment_id) REFERENCES blog_comment (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blog_comment DROP FOREIGN KEY FK_7882EFEF727ACA70');
        $this->addSql('ALTER TABLE blog_comment_likes DROP FOREIGN KEY FK_93D61CE0F8697D13');
        $this->addSql('DROP TABLE blog_comment');
        $this->addSql('DROP TABLE blog_comment_likes');
    }
}
