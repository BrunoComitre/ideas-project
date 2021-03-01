# ROADMAP

&nbsp;

## PASSO 1 [0.0.1] - [2021-02-07] [2021-02-15]

### Visão do Produto

O Projeto Smart Security é uma ferramenta inovadora, que tem como principal abordagem a análise HTTP. Com isso, ao final do desenvolvimento será possível prever análises de acordo com a navegação. Quando se trata de requisitos mais técnicos dos trabalhos dos desenvolvedores de software, abaixo apresentamos algumas informações para facilitar a ambientação ao projeto.

A ideia geral do projeto, é analisar e gerar insights através de padrões e modelos matemáticos, exibidos em uma página web personalizáveis. Porém mínimo viável para o projeto é uma API que traga análise temporal através de página web. A principio será desenvolvido o back-end utilizando Python, junto a base de dados, a ser criada, assim como estudos sobre o dataset em construção utilizando-se de requisições e respostas HTTP, assim sendo escalável para futuramente se ter mais bases, mais estrutura, e maiores análises.

### Entendendo o Problema

Cabeçalhos HTTP contêm muita informação, que se visualizado unicamente se alcança um nível de entendimento. Porém ao ser inserido num fluxo pudemos começar a prever padrões, e é com esse intuito que a ferramenta foi pensada, visando auxiliar análises em fluxos de tráfego HTTP.

### Cronograma

Cada passo foi pensado para ser desenvolvido por 3 meses, onde ao final seria possível construir uma ferramenta completa. Porém devido ao caráter de estudo primordialmente, o tempo pode ser relativo de acordo com o passo ou atividade a ser executada. Lembrando que relatórios serão criados para metrificar o tempo de desenvolvimento tanto do desenvolvedor quanto da ferramenta.

A cada passo abaixo que parte do desenvolvimento, será elaborado um cronograma e uma trilha de desenvolvimento mais detalhado.

### Tecnologias Utilizadas

Utilizará frameworks conhecidos como:

- Python(Flask)
- JavasCript (Angular, React) 
- Base de Dados MongoDB

### Posicionamento de Mercado

A princípio a ferramenta não está sendo pensada em mercado, uma vez em andamento discussões futuras abordarão esse tema.

Principais benefícios do Projeto Smart Security:

- Treinar Programação Python e JavaScript.
- Treinar Aprendizado de Máquina e técnicas de Inteligência Artificial.
- Gerar insights voltados a segurança da informação.
- Prever padrões de navegação, ou qualquer outro insight construído através da analise dos dados.

### Arquitetura

Uma API REST facilitaria o uso de algoritmos de Machine Learning, pois os usuários não precisariam instalar ou manter o software de Machine Leaning.

### Organização de diretórios de código

Sendo definida com base em estudos, portanto não criada no momento.

A API pode ter seguinte estrutura:

- **Dados** - widgets para manipulação de dados (importação, exportação, geração aleatória de dados, processamento, entre outros).
- **Visualizar** - widgets para representar dados de várias formas (gráfico de dispersão, árvore, histograma, entre outros).
- **Modelo** - widgets para analisar dados e escolher algoritmos preditivos.
- **Avaliar** - widgets para testar a força dos algoritmos preditivos escolhidos.
- **Não supervisionado** - widgets para selecionar modelos de aprendizado não supervisionado (provavelmente podem ser combinados na seção Modelo da API).

### Testes Integrados e Contínuos

Desde o princípio a ferramenta será criada visando testes e integração contínua.

### Fluxo de Testes

O teste de fluxo de dados, é um teste de caixa-branca usado para verificação de softwares.

### Escopo

Conforme andamento, o seguinte escopo será evoluído:

- Escopo do Produto: Análises disponíveis, layout do aplicativo, tamanho da base de dados, quantidade de análises simultâneas.
- Escopo de Projeto: Distribuição inicial Gratuita, Criar nova versão de projeto escalável para venda, Criar licença de uso.
  
### Regras de Negócio, Limitações e Validações

Com base na leitura de [COMO PUBLICAR UM MODELO DE MACHINE LEARNING EM PRODUÇÃO?](http://datascienceacademy.com.br/blog/como-publicar-um-modelo-de-machine-learning-em-producao/), será utilizado Aprendizado online e Previsões sob demanda (On-Demand Prediction).

### Modelo de Negócio

**Freemium**: Ofertas de serviços Free e Premium, e o usuário escolhe em qual deseja se encaixar. Isso permite alcançar mais usuários, que podem ser convencidos pelo serviço gratuito a migrar para o Premium.

***
&nbsp;

## PASSO 2 [0.0.1] - [2021-02-15] [0000-00-00]

### Cronograma Databases

- [ ] [2021-02-15] [0000-00-00] Criar estrutura json
- [ ] [0000-00-00] [0000-00-00] Ver como capturar dados para criar a base

```
{
  "id_": {
    "id": "string",
    "type": "object",
    "url": "string",
    "base_url": "string",
    "general_body": {
      "resource": "string",
      "bytes": "number",
      "request": "string",
      "request_method": "string",
      "referrer": "string",
      "ip": "number",
      "timestamp": "number"
    },
    "response_headers": {
      "response": "number",
      "example": "string"
    },
    "request_headers": {
      "useragent": "string",
      "example": "string"
    },
    "query_string_parameters": {
      "example": "string"
    }
  }
}
```

### Cronograma API

- [ ] [0000-00-00] [0000-00-00] Criar um crud Flask
- [ ] [0000-00-00] [0000-00-00] Deixar Async
- [ ] [0000-00-00] [0000-00-00] Criar ambiente de DEV/PROD/HOMOLOG
- [ ] [0000-00-00] [0000-00-00] Adicionar MongoDB para Armazenar os Dados
- [ ] [0000-00-00] [0000-00-00] Mover para um ambiente Docker

### Cronograma Análise

- [ ] [0000-00-00] [0000-00-00] Criar modelo base de Notebook Jupyter
- [ ] [0000-00-00] [0000-00-00] Criar base de dados Request e Response
- [ ] [0000-00-00] [0000-00-00] Gerar Insights antes de segur para o próximo passo

***
&nbsp;

## PASSO 3 [0.0.0] - [0000-00-00] [0000-00-00]

- API:
  - Mover a base Request e Response para o MongoDB
  - Trazer apenas os campos necessários extraídos a través da primeira análise
- ANALISE:
  - Começar a ver os modelos e aprendizados

A interface do usuário contém recursos como:

- Carregar arquivo .csv com dados históricos.
- Defina o número de características (marcas de referência, o conjunto de dados foi baseado na previsão).
-  Área de resultado da saída.

**Visualização**

- Altair é uma biblioteca declarativa de visualização estatística para Python, baseada na poderosa gramática de visualização Vega-Lite.
- Bokeh é uma biblioteca de visualização interativa Python que tem como alvo navegadores modernos para apresentação.
- Matplotlib D3 (mpld3) - O projeto mpld3 reúne o Matplotlib, a popular biblioteca de gráficos baseada em Python, e o D3js, a popular biblioteca JavaScript para criar visualizações de dados interativas para a web.
- Data-Driven Documents- D3.js é uma biblioteca JavaScript para manipular documentos com base em dados. 
- Utilização do Svelte para criar o Front-End

**Widgets gerais da interface do usuário**

- Interface do usuário Onsen

**Widgets de gráfico/fluxo de dados**

- mxGraph

**UI**

Interface (s) do usuário do Machine Learning e Interface (s) REST

A interface do usuário para algoritmos de aprendizado de máquina facilitará a criação de serviços de aprendizado de máquina para pessoas com pouca experiência em programação. A interface do usuário deve incluir interface para interagir com dados, sequenciar tarefas de ML e acessar a saída. Também pode incluir visualizações básicas para fornecer aos usuários informações sobre dados (histograma etc.)

A interface do usuário contém recursos como:

- Carregar arquivo .csv com dados históricos
- Defina o número de características (marcas de referência, o conjunto de dados foi baseado na previsão)
- Área de resultado da saída

***
&nbsp;

## PASSO 4 [0.0.0] - [0000-00-00] [0000-00-00]

  - Elaborar Front-End
  - Buscar implementação Sonic (Pesquisa Redis ou outro banco melhor busca)

**Aprendizado de máquina como serviço**

- Apache PredictionIO.
- Seldon é uma plataforma de implementação de aprendizado de máquina de código aberto de nível empresarial

**Orange3**

- Orange3: interface de usuário de aprendizado de máquina com modelagem de arrastar e soltar, visualização, gerenciamento de dados e muito mais.
- Protocolos e estruturas para o aprendizado de máquina por inferência como um serviço - uma arquitetura para apresentar algoritmos de aprendizado de máquina, suas entradas (dados) e saídas (preditores) como serviços Web RESTful orientados a recursos, a fim de tornar a tecnologia de aprendizado de máquina acessível a uma ampla gama de pessoas do que apenas pesquisadores de aprendizado de máquina.
- Cliente JavaScript.
- invólucro sklearn.

**Análise de séries temporais**

Ao coletar dados temos sempre informações como data e hora. Em muitos casos, é útil encontrar tendências ou padrões nos dados ao longo do tempo, incluindo a possibilidade de prever tendências futuras. Esses tipos de análise são abrangidos pela

**análise de séries temporais**

Exemplos específicos incluem:
- planejamento e gerenciamento de recursos empresariais
  - funcionários
  - servidores / recursos de computação
  - cadeia de mantimentos
- monitoramento ambiental

**Detecção de Anomalia**

Podemos procurar valores que se destacam fora da faixa ou variação normal em conjuntos de dados médios ou grandes. Esses dados 'anormais' podem apontar para problemas ou condições únicas. Os algoritmos de **detecção de anomalias** podem ajudar os tomadores de decisão a encontrar rapidamente segmentos incomuns de dados.

Exemplos específicos incluem:
- detecção de fraude
- monitoramento e alerta do servidor

***
&nbsp;

## PASSO 5 [0.0.0] - [0000-00-00] [0000-00-00]

  - Implementar modelo na aplicação
  - Armazenamento dos resultados


- Adicionar os dados em [SecLists](https://github.com/danielmiessler/SecLists) no banco

***
&nbsp;

## PASSO 6 [0.0.0] - [0000-00-00] [0000-00-00]

  - Começar a definir outras bases de dados, ou outro tipo de informação para enriquecer os dados


- E para cada uma dessas, seria uma rota única onde ao receber o dado dispara a análise em cada uma delas. E com todos resultados em mãos estava pensando em usar o [Streamlit](https://github.com/streamlit/streamlit) ou criar um Front-End.

- Com a análise terminada seria retornado uma página web contendo a análise dinânica

***
&nbsp;

## PASSO 7 [0.0.0] - [0000-00-00] [0000-00-00]

  - Plataforma web com dados de segurança. algum tipo de relação não de ataques mais ocorridos isso já tem, mas de insights sobre padrões de comportamento análise temporal.

***
