  CREATE TABLE IF NOT EXISTS accounts (
    id CHAR(36) PRIMARY KEY DEFAULT (uuid()),
    pseudo VARCHAR(22),
    hashed_password VARCHAR(22),
    email VARCHAR(50),
    created_at BIGINT UNSIGNED
);