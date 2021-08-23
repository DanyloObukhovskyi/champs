<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210729130107 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE attr_types (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blog_type_attr (id INT AUTO_INCREMENT NOT NULL, blog_type_id_id INT NOT NULL, attr_id_id INT NOT NULL, value INT NOT NULL, INDEX IDX_760F0E53978E3B49 (blog_type_id_id), INDEX IDX_760F0E5367B318E1 (attr_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blog_types (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blogs (id INT AUTO_INCREMENT NOT NULL, user_id_id INT NOT NULL, game_id_id INT NOT NULL, type_id_id INT NOT NULL, title VARCHAR(255) NOT NULL, text LONGTEXT NOT NULL, logo VARCHAR(255) NOT NULL, date DATETIME NOT NULL, views INT DEFAULT NULL, is_top TINYINT(1) DEFAULT NULL, INDEX IDX_F41BCA709D86650F (user_id_id), INDEX IDX_F41BCA704D77E7D8 (game_id_id), INDEX IDX_F41BCA70714819A0 (type_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE blog_type_attr ADD CONSTRAINT FK_760F0E53978E3B49 FOREIGN KEY (blog_type_id_id) REFERENCES blog_types (id)');
        $this->addSql('ALTER TABLE blog_type_attr ADD CONSTRAINT FK_760F0E5367B318E1 FOREIGN KEY (attr_id_id) REFERENCES attr_types (id)');
        $this->addSql('ALTER TABLE blogs ADD CONSTRAINT FK_F41BCA709D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE blogs ADD CONSTRAINT FK_F41BCA704D77E7D8 FOREIGN KEY (game_id_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE blogs ADD CONSTRAINT FK_F41BCA70714819A0 FOREIGN KEY (type_id_id) REFERENCES blog_types (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blog_type_attr DROP FOREIGN KEY FK_760F0E5367B318E1');
        $this->addSql('ALTER TABLE blog_type_attr DROP FOREIGN KEY FK_760F0E53978E3B49');
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA70714819A0');
        $this->addSql('DROP TABLE attr_types');
        $this->addSql('DROP TABLE blog_type_attr');
        $this->addSql('DROP TABLE blog_types');
        $this->addSql('DROP TABLE blogs');
    }
}
