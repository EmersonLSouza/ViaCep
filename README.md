create database db_contabilidade;
use db_contabilidade;
create table tb_user(
id_usuario int auto_increment primary key,
nome varchar(40),
email varchar(45),
cargo varchar(45),
senha text
);
create table tb_categoria(
id_categoria int auto_increment primary key,
nome varchar(40),
tipo bit,
descricao varchar(30)
);
create table tb_lançamento (
id_lancamento int auto_increment primary key,
data_lancamento date,
ds_lancamento varchar(40),
fk_usuario int,
fk_categoria int,
foreign key (fk_usuario) references tb_user (id_usuario),
foreign key (fk_categoria) references tb_categoria (id_categoria)
tem menu de contexto
