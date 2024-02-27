# Api_rotas

1. Descrição e Objetivo do projeto
2. Tecnologias utilizadas
3. Documentação Api
4. Créditos
5. Licença
6. Imagem Modelo Relacional BD

<hr>

<h2>1. Descrição </h2>
<p>Olá! sou Ednei Soares de Carvalho Filho, e esta é uma versão de uma api simples fornecendo a distancia de duas cidades. <br>
O objetivo principal da criação dessa api foi para aprender a desenvolder uma api. A ideia é simples, permite que quando consumida adicione as cidades e a distancia entre elas. Permite ver todas as rotas cadastradas ou pode escolher uma rota filtrando pelo id da rota, vc pode atualizar a informação da rota e tambem pode deletar uma rota com o id.
Por padrão na etapa de desenvolvimento deixei a api salvando a data e horario que a rota foi salva.</p>

<hr>

<h2>2. Tecnologias Utilizadas </h2>


- Express
- Mongoose
- MongoDB
- Node.js
- Vercel
- Nodemon


<hr>

<h2>3. Documentação Api - https://api-rotas-psi.vercel.app </h2>

**[GET] /rotas**

Descrição: Retorna todas as rotas cadastradas.

Resposta:
~~~
[
	{
		"_id": "65d03e4185aabe8315e8113f",
		"nome_city1": "Mortugaba - BA ",
		"nome_city2": "Jacaraci - BA",
		"distancia": 35,
		"createAt": "2024-02-17T05:01:12.487Z",
		"__v": 0
	},
	{
		"_id": "65d0d175ef323cd6b6083b6c",
		"nome_city1": "Mortugaba - BA ",
		"nome_city2": "Caculé - BA",
		"distancia": 105,
		"createAt": "2024-02-17T15:31:24.442Z",
		"__v": 0
	},
	{
		"_id": "65d0ea779faf55424b7e56c6",
		"nome_city1": "Mortugaba - BA ",
		"nome_city2": "Licinio de Almeida - BA",
		"distancia": 65,
		"createAt": "2024-02-17T17:17:37.449Z",
		"__v": 0
	}
]
~~~
**[GET] /rotas/{id}**

Descrição: Retorna uma unica rota baseada no id passado.

Resposta:
~~~
{
	"_id": "65d03e4185aabe8315e8113f",
	"nome_city1": "Mortugaba - BA ",
	"nome_city2": "Jacaraci - BA",
	"distancia": 35,
	"createAt": "2024-02-17T05:01:12.487Z",
	"__v": 0
}
~~~
Caso o id não seja encontrado, emite essa resposta
~~~
{
	"error": "Rota não encontrada"
}

~~~
Caso o tamanho do id seja incompativel aparecerar essa resposta
~~~
{
	"error": "Error"
}

~~~

**[POST] /rotas**

Descrição: Cadastra de uma nova rota.

Entrada:
~~~
{
	"nome_city1":"Salinas - MG ",
	"nome_city2":"Licinio de Almeida - BA",
	"distancia": "260"
}
~~~
Resposta:
~~~
{
	"nome_city1": "Salinas - MG ",
	"nome_city2": "Licinio de Almeida - BA",
	"distancia": "260"
}
~~~
**[PUT] /rotas/{id}**

Descrição: Atualiza dados da rota.

Entrada:
~~~
{
	"nome_city2":"Caculé - BA"
}
~~~
Resposta:
~~~
{
	"_id": "65d0d175ef323cd6b6083b6c",
	"nome_city1": "Mortugaba - BA ",
	"nome_city2": "Caculé - BA",
	"distancia": 105,
	"createAt": "2024-02-17T15:31:24.442Z",
	"__v": 0
}
~~~


**[DELETE] /rotas/{id}**

Descrição: Exclui uma única rota.

Resposta se tudo ocorrer bem
~~~
{
	"response": "rota deletada"
}
~~~
Resposta se der algum erro...
~~~
{
	"error": "Error"
}
~~~

<hr>
brigadeirão


<h2>4. Créditos</h2>
<p>Abaixo segue alguns links que serviu de base e de ajuda para conseguir finalizar esse pequeno projeto.</p>
<dl>
  <dt><h3>4.1. <a href="https://expressjs.com/">Express</a></h3></dt>
  <dd>Framework web para Node.js.</dd>
  
  <dt><h3>4.2. <a href="https://mongoosejs.com/">Mongoose</a></h3></dt>
  <dd>Biblioteca de modelagem de objetos MongoDB para Node.js.</dd>
  
  <dt><h3>4.3. <a href="https://www.mongodb.com/">MongoDB</a></h3></dt>
  <dd>Banco de dados NoSQL.</dd>
  
  <dt><h3>4.4. <a href="https://nodemon.io/">Nodemon</a></h3></dt>
  <dd>Utilitário que monitora alterações no código e reinicia automaticamente o servidor.</dd>
  
  <dt><h3>4.5. <a href="https://vercel.com/">Vercel</a></h3></dt>
  <dd>Plataforma de hospedagem e implantação para aplicativos da web.</dd>

  <dt><h3>4.6. <a href="https://nodejs.org/pt-br/docs/"> Documentação Node</a></h3></dt>
  <dd>Ambiente de execução JavaScript do lado do servidor</dd>

  <dt><h3>4.7. <a href="https://nodejs.org/pt-br/docs/](https://www.youtube.com/embed/FZiza5N6BQU?si=a5qyKoYQxYKYsK63)"> Video sobre hospedar api</a></h3></dt>
  <dd>Auxilio para subir api pelo vercel</dd>
</dl>

      
<hr>

<h2>5. Licenças</h2>
<dl>
   
  <dt><h3>5.1. Licença do GitHub</h3></dt>
    <dd><a href="https://github.com/ednsoares/Atividade-07/blob/main/LICENSE">GPL - 3.0</a></dd>
</dl>

<hr>
<h2>6. Imagem Modelo Relacional BD</h2>
<a href="https://imgur.com/anvYxIq"><img src="https://i.imgur.com/anvYxIq.jpg" title="source: imgur.com" /></a>



