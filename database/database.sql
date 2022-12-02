CREATE TABLE Account (
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  cpf CHAR(11) NOT NULL,
  saldo INT NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE Transfers (
  id INT NOT NULL auto_increment,
  remetente_id INT NOT NULL,
  destinatario_id INT NOT NULL,
  valor INT NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (remetente_id)
    REFERENCES Account (id),
  FOREIGN KEY (destinatario_id)
    REFERENCES Account (id),
    PRIMARY KEY(id)
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;