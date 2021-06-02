<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210217202830 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE seo_pages (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, keywords LONGTEXT DEFAULT NULL, url VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE seo_pages_meta (id INT AUTO_INCREMENT NOT NULL, page_id INT NOT NULL, meta_tag VARCHAR(255) NOT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_9A5B6A4CC4663E4 (page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE seo_pages_meta ADD CONSTRAINT FK_9A5B6A4CC4663E4 FOREIGN KEY (page_id) REFERENCES seo_pages (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE seo_pages_meta DROP FOREIGN KEY FK_9A5B6A4CC4663E4');
        $this->addSql('DROP TABLE seo_pages');
        $this->addSql('DROP TABLE seo_pages_meta');
    }
}
