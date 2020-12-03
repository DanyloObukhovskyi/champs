<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201203114328 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE award (id INT AUTO_INCREMENT NOT NULL, icon VARCHAR(255) NOT NULL, text VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE teachers_award (teachers_id INT NOT NULL, award_id INT NOT NULL, INDEX IDX_1DF5436684365182 (teachers_id), INDEX IDX_1DF543663D5282CF (award_id), PRIMARY KEY(teachers_id, award_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE teachers_award ADD CONSTRAINT FK_1DF5436684365182 FOREIGN KEY (teachers_id) REFERENCES teachers (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE teachers_award ADD CONSTRAINT FK_1DF543663D5282CF FOREIGN KEY (award_id) REFERENCES award (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teachers_award DROP FOREIGN KEY FK_1DF543663D5282CF');
        $this->addSql('DROP TABLE award');
        $this->addSql('DROP TABLE teachers_award');
    }
}
