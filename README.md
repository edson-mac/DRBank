# :coin: DR Bank Restful API :dollar:



## :page_with_curl: Sobre

Esse projeto tem como objetivo construir uma API de um banco com operações simples de depósito 
e transfências de valores.
<br />
<br />
Além de poder instalar e rodar o projeto localmente, você pode também acessar a
[<strong>versão online em um deploy realizado no Railway.</strong>](https://dr-bank-front-end.vercel.app/)
<br />
<br />


## :hammer_and_wrench: Stacks e bibliotecas utilizadas


* Node.js
* Express.js
* MySQL
* Cors
* JWT


## :hammer_and_wrench: Instalação e execução


<details>
  <summary markdown="span"><strong>Configurando o banco de dados e .env</strong></summary><br />
  
  O projeto vem configurado para rodar em um banco de dados MySQL, então é nessário instalar 
  MySQL em seu computador ou utilizar um servidor na nuvem com as seguintes configuracões:

### 1. Em um arquivo .env na raíz do repositório, adicione as configurações de seu banco MySQL:

```sh
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_PORT=
```

### 2. Nesse mesmo arquivo .env, também configure as chaves de segredo do JWT e a porta do Express

```sh
PORT=
JWT_SECRET=
```
</details>

<details>
  <summary markdown="span"><strong>Rodando o projeto localmente</strong></summary><br />
  
  Para rodar está aplicação é necessário ter **Git** e o  **Node** e o instalados e atualizados em seu computador.

Também é necessário que o seu sistema operacional tenha um **terminal Bash** instalado. Caso você esteja utilizando **Linux** ou **macOS**, o Bash já vem instalado por padrão. Porém, se o seu sistema for **Windows**, talvez você precise fazer [a instalação a parte](https://www.lifewire.com/install-bash-on-windows-10-4101773).

### 1. Após clonar o repositório, execute o comando abaixo na raíz do projeto no terminal para instalar as dependências

```sh
npm install
```

### 2. Execute o projeto

```sh
npm start
```
</details>

## :computer: Documentação e rotas da API:

<details>
  <summary markdown="span"><strong>Criando uma conta /ACCOUNT</strong></summary><br />
  


### Requisição do tipo /POST

* É necessario ter a chave name
* É necessário ter a chave cpf
* Cpf aceita somente digitos numérios
* Cpf aceita apenas uma composição de 11 digitos

```sh
body = {
"name": 
"cpf":
}
```
</details>

<details>
  <summary markdown="span"><strong>Checando saldo /ACCOUNT/SALDO</strong></summary><br />
  


### Requisição do tipo /GET

* É necessario o token de autenticação obtido via Login


```sh
header = {
authorization: token
}
```
</details>

</details>

<details>
  <summary markdown="span"><strong>Efetuando depósito /ACCOUNT/DEPOSITO</strong></summary><br />
  


###  Requisição do tipo /POST

* É necessario o token de autenticação obtido via Login
* É necessário um valor maior que 0
* É necessário informar o valor da chave "deposito"


```sh
header = {
authorization: token
}

body = {
"deposito":
}
```
</details>

<details>
  <summary markdown="span"><strong>Efetuando Login /LOGIN</strong></summary><br />
  


###  Requisição do tipo /POST

* É necessario a chave cpf
* É necessário a chave name
* É necessário que e name e cpf correspodam no cadastro do banco de dados.

```sh
body = {
"name":
"cpf":
}
```
</details>


<details>
  <summary markdown="span"><strong>Efetuando transferência /TRANSFER</strong></summary><br />
  


###  Requisição do tipo /POST

* É necessario o token de autenticação obtido via Login
* É necessário a chave destinatario ser um usuário existente
* É necessário que o valor transferValue seja maior que 0, menor que 2000 e não maior que seu saldo atual

```sh
header: {
authorization: token
}
body = {
"destinatario":
"transferValue":
}
```
</details>

