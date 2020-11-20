## PASSO 1
Instalar Vangrant
``` $ sudo apt-get install virtualbox ```

## PASSO 2
Instalar VirtualBox
``` $ sudo apt-get install vagrant ```

## Passo 3
Criar a pasta do provisioner e executar o comando:
``` $ mkdir ~/projeto-vagrant ```
``` $ cd ~/projeto-vagrant ```
``` $ vagrant init ```

## Passo 4
Para rodar executar o comando:
``` $ vagrant up ```

## Passo 5
Para acessar executar o comando:
``` $ vagrant ssh ```

## Passo 5

Comandos básicos do Vagrant
O seu ambiente virtual do Vagrant acabou de ser configurado, certo? Mas, é preciso aprender os comandos básicos para conseguir manipulá-lo. Vejamos os principais deles, abaixo.

vagrant up
O comando soa familiar? Nós o aplicamos no tópico anterior para dar continuidade às configurações do ambiente. Normalmente, ele também é utilizado para iniciar a máquina virtual.

vagrant ssh
É o comando de login na máquina virtual sem autenticação.

vagrant reload
Como o próprio nome sugere, este comando reinicia a máquina virtual.

vagrant halt
Serve para desligar a máquina virtual e, assim, seja iniciada normalmente no próximo boot.

vagrant suspend
Utiliza-se o vagrant suspend para salvar o estado da máquina virtual em vez de desligá-la.

vagrant resume
Quando o vagrant suspend é acionado, use o vagrant resume para religar o ambiente no estado em que foi salvo.

vagrant destroy
Este comando remove a máquina virtual do Vagrant. Utilize-o somente quando quiser eliminar um projeto definitivamente.

vagrant provision
Faz a execução restrita do provisioner, ou seja, o ambiente não é reiniciado. Em outras palavras, ele atualiza as configurações do sistema de maneira agilizada.

vagrant global-status

vagrant reload {boxid}

vagrant plugin repair

vagrant plugin expunge --reinstall

***
