create database supportFlow;
use supportFlow;

create table Admin(
	id int auto_increment primary key,
    nome varchar(100) not null,
    matricula char(9) not null unique,
    senha varchar(255) not null,
    data_criacao timestamp default current_timestamp,
    data_atualizacao timestamp default current_timestamp on update current_timestamp
);

create table Solicitacao(
	id int auto_increment primary key,
    nome_solicitante varchar(50) not null,
    matricula_solicitante char(9) not null,
    cargo varchar(50) not null,
    local_chamada varchar(100) not null,
    descricao text not null,
    categoria varchar(50) not null,
    prioridade int default 1,#1 é o nível mais baixo de prioridade
    status int default 1,#1 é o status aberto, 2 é em andamento e 3 é encerrado
    data_abertura timestamp default current_timestamp,
    data_atualizacao timestamp default current_timestamp on update current_timestamp
);


INSERT INTO Admin (nome, matricula, senha) VALUES
('Pedro Silva', 'ADM123456', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Ana Souza', 'ADM987654', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Carlos Ferreira', 'ADM000111', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Gabriel Rocha', 'ADM001122', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Lívia Martins', 'ADM223344', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Ricardo Neves', 'ADM445566', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Sofia Pires', 'ADM667788', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Tiago Alves', 'ADM889900', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Helena Costa', 'ADM101010', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('João Gomes', 'ADM202020', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Clara Dantas', 'ADM303030', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u'),
('Bruno Meireles', 'ADM404040', '$2b$10$iOjWl07HkrRVTK54A1a2/uoPLiuqg/40eYn4lfwP16MGTR2f1hL0u');

INSERT INTO Solicitacao (
    nome_solicitante, matricula_solicitante, cargo, local_chamada, descricao, categoria, prioridade, status
) VALUES
(
    'Mariana Alves', 
    'USR112233', 
    'Analista Júnior', 
    'Prédio A - 5º Andar', 
    'Meu computador parou de ligar após uma atualização. Preciso de assistência técnica.', 
    'Hardware', 
    3, -- Prioridade Alta
    1  -- Status Aberto
),
(
    'Ronaldo Lima', 
    'USR445566', 
    'Gerente de Projetos', 
    'Setor de Vendas', 
    'O acesso ao sistema de CRM está lento desde ontem. A equipe está com dificuldades.', 
    'Software', 
    2, -- Prioridade Média
    2  -- Status Em Andamento
),
(
    'Fabiola Costa', 
    'USR778899', 
    'Estagiária', 
    'Recepção', 
    'Preciso de permissão para acessar a pasta compartilhada de Recursos Humanos.', 
    'Acesso/Permissão', 
    1, -- Prioridade Baixa
    3  -- Status Encerrado (Resolvido)
),
(
    'Patrícia Farias', 
    'USR001001', 
    'Contadora', 
    'Sala Financeira', 
    'O software de gestão fiscal não está gerando relatórios de impostos. É urgente.', 
    'Software', 
    3, -- Alta
    2  -- Em Andamento
),
(
    'Diego Morais', 
    'USR002002', 
    'Desenvolvedor', 
    'Laboratório C', 
    'Solicitação de instalação do software de design gráfico na minha estação de trabalho.', 
    'Instalação', 
    1, -- Baixa
    1  -- Aberto
),
(
    'Camila Rezende', 
    'USR003003', 
    'Assistente de RH', 
    'Setor de Pessoal', 
    'O telefone de mesa não está funcionando. Não consigo fazer ou receber chamadas externas.', 
    'Comunicação', 
    2, -- Média
    3  -- Encerrado
),
(
    'Felipe Lemos', 
    'USR004004', 
    'Coordenador', 
    'Escritório 12', 
    'O projetor da sala de reuniões está piscando e com cores distorcidas. Necessário reparo.', 
    'Hardware', 
    3, -- Alta
    1  -- Aberto
),
(
    'Isabela Nunes', 
    'USR005005', 
    'Analista Plena', 
    'Prédio B - 2º Andar', 
    'Esqueci a minha senha do e-mail corporativo. Preciso de reset urgente.', 
    'Acesso/Permissão', 
    2, -- Média
    2  -- Em Andamento
),
(
    'Gustavo Ribeiro', 
    'USR006006', 
    'Técnico de Campo', 
    'Almoxarifado', 
    'A impressora de etiquetas da área de expedição está atolando o papel constantemente.', 
    'Hardware', 
    2, -- Média
    3  -- Encerrado
),
(
    'Laura Sales', 
    'USR007007', 
    'Vendedor', 
    'Loja Principal', 
    'O terminal de vendas (PDV) não está se conectando à rede. Vendas paralisadas.', 
    'Rede', 
    3, -- Alta
    1  -- Aberto
),
(
    'André Oliveira', 
    'USR008008', 
    'Trainee', 
    'Treinamento', 
    'Solicito a criação de uma nova conta de usuário para um novo colaborador.', 
    'Acesso/Permissão', 
    1, -- Baixa
    2  -- Em Andamento
),
(
    'Viviane Dias', 
    'USR009009', 
    'Diretora', 
    'Presidência', 
    'O link de internet na sala da diretoria está instável. Cai a conexão frequentemente.', 
    'Rede', 
    3, -- Alta
    3  -- Encerrado (Foi resolvido)
);

select * from Solicitacao where prioridade=3;
select * from Solicitacao where status=1 and prioridade=3;