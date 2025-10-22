CREATE TABLE users (
    -- Chave Primária e Identificador Único
    id BIGSERIAL PRIMARY KEY,
    
    -- Dados Pessoais
    first_name VARCHAR(50) NOT NULL, -- Nome não pode ser nulo, tamanho razoável
    surname VARCHAR(50) NOT NULL,    -- Sobrenome não pode ser nulo, tamanho razoável
    
    -- Credenciais (email e senha)
    email VARCHAR(100) NOT NULL UNIQUE, 
        -- Email é ÚNICO e NÃO NULO (garante que não há duplicidade de contas)
        -- Um CHECK constraint pode ser adicionado para validação básica de formato, mas é melhor na aplicação
        
    password_hash VARCHAR(255) NOT NULL,
        -- Armazena o HASH da senha (NUNCA a senha em texto puro)
        -- 255 é um bom tamanho para a maioria dos algoritmos de hash (como bcrypt ou Argon2)
        -- NÃO armazene 'confirmPassword', pois ele só existe para validação no frontend

    -- Metadados de Auditoria e Controle
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE
);