<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210802183032 extends AbstractMigration
{

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA709D86650F');
        $this->addSql('ALTER TABLE blogs DROP FOREIGN KEY FK_F41BCA704D77E7D8');
        $this->addSql('ALTER TABLE blogs DROP game_id_id');
        $this->addSql('ALTER TABLE blogs DROP user_id_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
