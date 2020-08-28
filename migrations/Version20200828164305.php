<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200828164305 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE album_photos (id INT AUTO_INCREMENT NOT NULL, album_id INT DEFAULT NULL, path VARCHAR(255) NOT NULL, INDEX IDX_DA0DDD6E1137ABCF (album_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE albums (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE charactristics (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, game VARCHAR(255) DEFAULT NULL, hours INT DEFAULT NULL, role VARCHAR(255) DEFAULT NULL, skills JSON DEFAULT NULL, goals JSON DEFAULT NULL, cost INT DEFAULT NULL, INDEX IDX_DD66861FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, started_at DATE NOT NULL, ended_at DATE NOT NULL, image VARCHAR(255) DEFAULT NULL, prize VARCHAR(255) DEFAULT NULL, location VARCHAR(255) DEFAULT NULL, command_count INT DEFAULT NULL, created_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE map (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, code VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_map_team_statistic (id INT AUTO_INCREMENT NOT NULL, match_id INT NOT NULL, team_id INT NOT NULL, map_id INT NOT NULL, win_rate VARCHAR(255) DEFAULT NULL, INDEX IDX_3A723D652ABEACD6 (match_id), INDEX IDX_3A723D65296CD8AE (team_id), INDEX IDX_3A723D6553C55F64 (map_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_pick_and_ban (id INT AUTO_INCREMENT NOT NULL, game_id INT NOT NULL, team_id INT DEFAULT NULL, map VARCHAR(255) NOT NULL, operation_type SMALLINT NOT NULL, INDEX IDX_543D7138E48FD905 (game_id), INDEX IDX_543D7138296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_statistics (id INT AUTO_INCREMENT NOT NULL, game_match_id INT NOT NULL, map_id INT DEFAULT NULL, score1 INT NOT NULL, score2 INT NOT NULL, INDEX IDX_A3CE400E81FA53F0 (game_match_id), INDEX IDX_A3CE400E53C55F64 (map_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE past_match (id INT AUTO_INCREMENT NOT NULL, match_id INT NOT NULL, team_id INT NOT NULL, score VARCHAR(255) NOT NULL, team_two VARCHAR(255) NOT NULL, INDEX IDX_258292782ABEACD6 (match_id), INDEX IDX_25829278296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payment (id INT AUTO_INCREMENT NOT NULL, lesson_id INT NOT NULL, yandex_kassa_id VARCHAR(255) NOT NULL, yandex_data JSON NOT NULL, payment_status INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_6D28840DCDF80196 (lesson_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE purse_history (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, operation INT NOT NULL, datetime DATETIME NOT NULL, INDEX IDX_927D93FFA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rating_person (id INT AUTO_INCREMENT NOT NULL, person_id INT NOT NULL, created_at DATETIME NOT NULL, rating VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1B2EBBFE217BBB47 (person_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rating_team (id INT AUTO_INCREMENT NOT NULL, team_id INT NOT NULL, created_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_98359A296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE result (id INT AUTO_INCREMENT NOT NULL, match_id INT NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_136AC1132ABEACD6 (match_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, lesson_id INT NOT NULL, student_id INT NOT NULL, trainer_id INT NOT NULL, rate SMALLINT NOT NULL, tactics TINYINT(1) NOT NULL, scatter TINYINT(1) NOT NULL, aim TINYINT(1) NOT NULL, mentor TINYINT(1) NOT NULL, duel TINYINT(1) NOT NULL, comment LONGTEXT NOT NULL, UNIQUE INDEX UNIQ_794381C6CDF80196 (lesson_id), INDEX IDX_794381C6CB944F1A (student_id), INDEX IDX_794381C6FB08EDF6 (trainer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stream (id INT AUTO_INCREMENT NOT NULL, game_match_id INT NOT NULL, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, language VARCHAR(255) DEFAULT NULL, INDEX IDX_F0E9BE1C81FA53F0 (game_match_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE weapon_rating (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, rating INT NOT NULL, color VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE album_photos ADD CONSTRAINT FK_DA0DDD6E1137ABCF FOREIGN KEY (album_id) REFERENCES albums (id)');
        $this->addSql('ALTER TABLE charactristics ADD CONSTRAINT FK_DD66861FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE match_map_team_statistic ADD CONSTRAINT FK_3A723D652ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE match_map_team_statistic ADD CONSTRAINT FK_3A723D65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE match_map_team_statistic ADD CONSTRAINT FK_3A723D6553C55F64 FOREIGN KEY (map_id) REFERENCES map (id)');
        $this->addSql('ALTER TABLE match_pick_and_ban ADD CONSTRAINT FK_543D7138E48FD905 FOREIGN KEY (game_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE match_pick_and_ban ADD CONSTRAINT FK_543D7138296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE match_statistics ADD CONSTRAINT FK_A3CE400E81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE match_statistics ADD CONSTRAINT FK_A3CE400E53C55F64 FOREIGN KEY (map_id) REFERENCES map (id)');
        $this->addSql('ALTER TABLE past_match ADD CONSTRAINT FK_258292782ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE past_match ADD CONSTRAINT FK_25829278296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE payment ADD CONSTRAINT FK_6D28840DCDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
        $this->addSql('ALTER TABLE purse_history ADD CONSTRAINT FK_927D93FFA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE rating_person ADD CONSTRAINT FK_1B2EBBFE217BBB47 FOREIGN KEY (person_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE rating_team ADD CONSTRAINT FK_98359A296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE result ADD CONSTRAINT FK_136AC1132ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6CDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6CB944F1A FOREIGN KEY (student_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6FB08EDF6 FOREIGN KEY (trainer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE stream ADD CONSTRAINT FK_F0E9BE1C81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE lessons ADD student_id_id INT DEFAULT NULL, ADD trainer_id_id INT DEFAULT NULL, ADD cost INT NOT NULL, ADD status SMALLINT NOT NULL, ADD student_status TINYINT(1) NOT NULL, ADD trainer_status TINYINT(1) NOT NULL, DROP student_id, DROP trainer_id');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9F773E7CA FOREIGN KEY (student_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D93203CF3A FOREIGN KEY (trainer_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3F4218D9F773E7CA ON lessons (student_id_id)');
        $this->addSql('CREATE INDEX IDX_3F4218D93203CF3A ON lessons (trainer_id_id)');
        $this->addSql('ALTER TABLE `match` ADD event_id INT DEFAULT NULL, ADD code VARCHAR(32) NOT NULL, ADD url VARCHAR(255) DEFAULT NULL, ADD score1 INT DEFAULT NULL, ADD score2 INT DEFAULT NULL, ADD detail_info TINYINT(1) NOT NULL, ADD live TINYINT(1) NOT NULL, ADD team1_win_rate VARCHAR(255) DEFAULT NULL, ADD team2_win_rate VARCHAR(255) DEFAULT NULL, DROP score, CHANGE team1_id team1_id INT DEFAULT NULL, CHANGE team2_id team2_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC505E72BCFA4 FOREIGN KEY (team1_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC505F59E604A FOREIGN KEY (team2_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC50571F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('CREATE INDEX IDX_7A5BC505E72BCFA4 ON `match` (team1_id)');
        $this->addSql('CREATE INDEX IDX_7A5BC505F59E604A ON `match` (team2_id)');
        $this->addSql('CREATE INDEX IDX_7A5BC50571F7E88B ON `match` (event_id)');
        $this->addSql('ALTER TABLE person ADD is_week_player TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE player ADD start_at DATETIME DEFAULT NULL, DROP started_at, DROP stoped_at');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65217BBB47 FOREIGN KEY (person_id) REFERENCES person (id)');
        $this->addSql('CREATE INDEX IDX_98197A65296CD8AE ON player (team_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_98197A65217BBB47 ON player (person_id)');
        $this->addSql('ALTER TABLE player_statistics ADD player_id INT NOT NULL, ADD kill_value VARCHAR(255) DEFAULT NULL, ADD death_value VARCHAR(255) DEFAULT NULL, DROP kill_death, CHANGE map_id map_id INT DEFAULT NULL, CHANGE side side VARCHAR(255) DEFAULT NULL, CHANGE gamer_id game_match_id INT NOT NULL');
        $this->addSql('ALTER TABLE player_statistics ADD CONSTRAINT FK_BD760F1F81FA53F0 FOREIGN KEY (game_match_id) REFERENCES `match` (id)');
        $this->addSql('ALTER TABLE player_statistics ADD CONSTRAINT FK_BD760F1F99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE player_statistics ADD CONSTRAINT FK_BD760F1F53C55F64 FOREIGN KEY (map_id) REFERENCES map (id)');
        $this->addSql('CREATE INDEX IDX_BD760F1F81FA53F0 ON player_statistics (game_match_id)');
        $this->addSql('CREATE INDEX IDX_BD760F1F99E6F5DF ON player_statistics (player_id)');
        $this->addSql('CREATE INDEX IDX_BD760F1F53C55F64 ON player_statistics (map_id)');
        $this->addSql('ALTER TABLE teachers ADD videolink VARCHAR(255) DEFAULT NULL, ADD shorttitle VARCHAR(500) DEFAULT NULL, ADD method LONGTEXT DEFAULT NULL, ADD twitch VARCHAR(255) DEFAULT NULL, ADD stream_type INT DEFAULT NULL, DROP video_link, DROP game, CHANGE user_id userid INT NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_ED071FF6F132696E ON teachers (userid)');
        $this->addSql('ALTER TABLE team ADD region VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD name VARCHAR(255) DEFAULT NULL, ADD game VARCHAR(25) DEFAULT NULL, ADD rank VARCHAR(20) DEFAULT NULL, ADD family VARCHAR(255) DEFAULT NULL, ADD steam_id VARCHAR(255) DEFAULT NULL, ADD discord VARCHAR(255) DEFAULT NULL, ADD purse INT NOT NULL, CHANGE is_trainer istrainer TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE album_photos DROP FOREIGN KEY FK_DA0DDD6E1137ABCF');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC50571F7E88B');
        $this->addSql('ALTER TABLE match_map_team_statistic DROP FOREIGN KEY FK_3A723D6553C55F64');
        $this->addSql('ALTER TABLE match_statistics DROP FOREIGN KEY FK_A3CE400E53C55F64');
        $this->addSql('ALTER TABLE player_statistics DROP FOREIGN KEY FK_BD760F1F53C55F64');
        $this->addSql('DROP TABLE album_photos');
        $this->addSql('DROP TABLE albums');
        $this->addSql('DROP TABLE charactristics');
        $this->addSql('DROP TABLE event');
        $this->addSql('DROP TABLE map');
        $this->addSql('DROP TABLE match_map_team_statistic');
        $this->addSql('DROP TABLE match_pick_and_ban');
        $this->addSql('DROP TABLE match_statistics');
        $this->addSql('DROP TABLE past_match');
        $this->addSql('DROP TABLE payment');
        $this->addSql('DROP TABLE purse_history');
        $this->addSql('DROP TABLE rating_person');
        $this->addSql('DROP TABLE rating_team');
        $this->addSql('DROP TABLE result');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP TABLE stream');
        $this->addSql('DROP TABLE weapon_rating');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9F773E7CA');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D93203CF3A');
        $this->addSql('DROP INDEX IDX_3F4218D9F773E7CA ON lessons');
        $this->addSql('DROP INDEX IDX_3F4218D93203CF3A ON lessons');
        $this->addSql('ALTER TABLE lessons ADD trainer_id INT NOT NULL, DROP student_id_id, DROP trainer_id_id, DROP status, DROP student_status, DROP trainer_status, CHANGE cost student_id INT NOT NULL');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC505E72BCFA4');
        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC505F59E604A');
        $this->addSql('DROP INDEX IDX_7A5BC505E72BCFA4 ON `match`');
        $this->addSql('DROP INDEX IDX_7A5BC505F59E604A ON `match`');
        $this->addSql('DROP INDEX IDX_7A5BC50571F7E88B ON `match`');
        $this->addSql('ALTER TABLE `match` ADD score VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP event_id, DROP code, DROP url, DROP score1, DROP score2, DROP detail_info, DROP live, DROP team1_win_rate, DROP team2_win_rate, CHANGE team1_id team1_id INT NOT NULL, CHANGE team2_id team2_id INT NOT NULL');
        $this->addSql('ALTER TABLE person DROP is_week_player');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65296CD8AE');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65217BBB47');
        $this->addSql('DROP INDEX IDX_98197A65296CD8AE ON player');
        $this->addSql('DROP INDEX UNIQ_98197A65217BBB47 ON player');
        $this->addSql('ALTER TABLE player ADD stoped_at DATETIME DEFAULT NULL, CHANGE start_at started_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE player_statistics DROP FOREIGN KEY FK_BD760F1F81FA53F0');
        $this->addSql('ALTER TABLE player_statistics DROP FOREIGN KEY FK_BD760F1F99E6F5DF');
        $this->addSql('DROP INDEX IDX_BD760F1F81FA53F0 ON player_statistics');
        $this->addSql('DROP INDEX IDX_BD760F1F99E6F5DF ON player_statistics');
        $this->addSql('DROP INDEX IDX_BD760F1F53C55F64 ON player_statistics');
        $this->addSql('ALTER TABLE player_statistics ADD gamer_id INT NOT NULL, ADD kill_death VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP game_match_id, DROP player_id, DROP kill_value, DROP death_value, CHANGE map_id map_id INT NOT NULL, CHANGE side side VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_ED071FF6F132696E ON teachers');
        $this->addSql('ALTER TABLE teachers ADD video_link VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD game VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, DROP videolink, DROP shorttitle, DROP method, DROP twitch, DROP stream_type, CHANGE userid user_id INT NOT NULL');
        $this->addSql('ALTER TABLE team DROP region');
        $this->addSql('ALTER TABLE user DROP name, DROP game, DROP rank, DROP family, DROP steam_id, DROP discord, DROP purse, CHANGE istrainer is_trainer TINYINT(1) NOT NULL');
    }
}
