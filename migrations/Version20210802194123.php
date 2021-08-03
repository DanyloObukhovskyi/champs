<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210802194123 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs

        $this->addSql('ALTER TABLE blogs ADD game_id INT NOT NULL, ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE blogs ADD CONSTRAINT FK_F41BCA70E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE blogs ADD CONSTRAINT FK_F41BCA70A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_F41BCA70E48FD905 ON blogs (game_id)');
        $this->addSql('CREATE INDEX IDX_F41BCA70A76ED395 ON blogs (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA70E48FD905');
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA70A76ED395');
        $this->addSql('DROP INDEX IDX_F41BCA70E48FD905 ON blogs');
        $this->addSql('DROP INDEX IDX_F41BCA70A76ED395 ON blogs');
        $this->addSql('ALTER TABLE blogs DROP game_id, DROP user_id');
    }
}
