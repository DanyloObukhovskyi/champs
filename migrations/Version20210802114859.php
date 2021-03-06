<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210802114859 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
//         this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE blog_tags (id INT AUTO_INCREMENT NOT NULL, blog_id INT NOT NULL, title VARCHAR(255) NOT NULL, INDEX IDX_8F6C18B6DAE07E97 (blog_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE blog_tags ADD CONSTRAINT FK_8F6C18B6DAE07E97 FOREIGN KEY (blog_id) REFERENCES blogs (id)');
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA70714819A0');
        $this->addSql('ALTER TABLE blogs DROP type_id_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE blog_tags');
    }
}
