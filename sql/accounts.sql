drop table accounts;

CREATE TABLE IF NOT EXISTS accounts (
    id CHAR(36) PRIMARY KEY DEFAULT (uuid()),
    pseudo VARCHAR(22) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at BIGINT UNSIGNED NOT NULL
);