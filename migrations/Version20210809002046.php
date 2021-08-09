<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210809002046 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE blog_payment (id INT AUTO_INCREMENT NOT NULL, blog_id INT NOT NULL, amount DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_81DE398EDAE07E97 (blog_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE purse_history_blog (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, datetime DATETIME NOT NULL, amount DOUBLE PRECISION NOT NULL, status VARCHAR(255) NOT NULL, INDEX IDX_E7FFBB05A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE blog_payment');
        $this->addSql('DROP TABLE purse_history_blog');
    }
}
