# Repositório

Criado apenas para salvar o teste da API de Visão Computacional e o Projeto da Ecil

Possibilidade de zerar o ano através da análise das informações e criar um perfil separado por clientes onde, seria possível separar análise por cliente.

Poderia ter no app

CSP, O QUE É

Área manipulável de captura de imagem
Pois é possível que cada cliente tenha panelas diferentes, e pra cada um poderia ter o limitador manipulável de tela..

histórico, corrida das panelas, é isso que precisa o numero das panelas e os filtros das imagens..

Ver o que o objetivo é de um mês, ver datas e entregas. Estipular questão tempo do modelo de treinamento, pode ser variável de acordo com a quantidade da tela.

Ver num futuro se quisessem implementar uma análise de desgaste

No número do carro você tem algumas temperaturas, pois a imagem do carro pode ter a média, a tendência, ou alguns pontos escolhidos pelas câmeras...

Regiões com maiores desgastes, por exemplo acima de 450 graus, pode gerar alerta sobre o carro está com desgaste

O software é para manutenção das panelas

Parte de histórico de revisão, seria possível aplicar na web uma campo a mais de informação

Criar escopo análise de dados possíveis técnicas para analisar e gerar valor para tela

Criar alarme referente a temperatura se subir mais de tantos graus

Pensar na questão modificações futuras, para outras empresas
Ver se em análise de imagens tem biblioteca pra reconhecer apenas texto em imagem, ignorando qualquer tipo de cor ou influencia de tamanho, apenas por imagem....

Análise de pallete em preto e branco, ou com azul frio vermelho quente e amarelo mais quente ainda....

Os outros dados são salvos em um SQLite, e ver a imagem, pra pegar o número do carro apenas...
O alarme é quem gera as informações, salvando a imagens e extraindo todos os dados em um banco de dados

O Land Data é o banco...

Pré definir um campo sei lá para, direcionar como o cliente vai salvar fazer backup e dump, e tudo mais.

#CRIAR BACKUP -  E ACRESCENTAR VALOR#
#CRIAR IDEIA – GRÁFICOS E ANÁLISES#

Pesquisar a LAND, esquemas e câmeras

#SOLICITAÇÃO# o alarme pode ser colocado por e-mail, se tiver internet #deixar isso na ideia#

Criar análise dos dados, como tempo do carro, quantidade de uso...

JS. Gráficos, como usar, ou em Python, como implementar...
Existem 6 áreas de interesse nas imagens, e podem ser até 16 campos para tabela... Controle de até 16 áreas por panela...
LIMITE DO SOFTWARE É DE ATÉ 8 CÂMERAS

Criar gráficos de tendência no aplicativo web, exemplo>

[filtro]

[carros]
[tabela]
[da parada]

[abaixo tem o gráfico de tendência]

Colocar sem login, sem nada, a primeiro momento...

Exigência dos clientes:
- monitoração das laterais e soleiras
- Identificação da panela através da panela (o número)
- banco de cada panela (até 4 câmeras)


ELIMIAR ESSA QUESTÃO DE PONTOS POR CÂMERA, E TENTAR ANALISAR A IMAGEM PRÓPRIA EM SI – POIS ELES USAM CÂMERAS PARA CAPTURAR IMAGEM...

Gerar gráficos para analisar temperatura -  MUITO IMPORTANTE

Capturar imagem por OCR ou por ML, ASSIM podemos analisar só o texto com OCR, ou podemos usar ML para extrair mais textos das imagens,

Ou melhor OCR pra pegar o TEXTO e ML para gerar dados dos gráficos 

Entender melhor o que são as áreas de interesse.

Explicar para eles a questão da análise exploratória, pois além de ter o resultado temos que criar uma documentação onde mostramos o porquê das coisas, temos que mostrar pra eles o do porque temos escolhidos cada um pra gerar resultado.

Converter a data juliana que está no banco para data convencional -   A SE FAZER #PROCURAR DATA JULIANA#


Pontos de interesse – No banco é salvo tanto a imagem quanto os pontos de interesse da imagem, são registros diferentes, exemplo:
Imagem 1 – possuiria tantos registros quantos configurados nos pontos de interesse na imagem, cada um com seu tagname
Uma abordagem para identificar os registros pertencentes a mesma imagem, seria o intervalo do tempo entre elas


Áreas de interesse são as tags...

***

- https://www.kaggle.com/gunjan17/reconize-devnagri-with-knn
- https://www.google.com/search?q=cascade+classifire&oq=cascade+classifire&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8
- https://medium.com/nxcd/opencv-microsoft-ocr-reconhecimento-de-caracteres-em-imagens-76e15a0fe358
- https://albumentations.ai/
- https://towardsdatascience.com/edge-detection-in-python-a3c263a13e03
- https://medium.com/code-divoire/integrating-opencv-js-with-an-angular-application-20ae11c7e217

***
