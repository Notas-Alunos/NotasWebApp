# Levantamento de Requisitos — AODGRAM

## O que temos para resolver

O Jean já ganha dinheiro vendendo engajamento em redes sociais e gostaria que esse processo de venda fosse automatizado.

Estamos desenvolvendo um novo sistema para o jean para essa finalidade que se chama AODGRAM.

Esse cliente final pode querer engajamento nas seguintes redes:

- Insta
- Tiktok

Os engajamentos podem ser:

- likes
- seguidores
- visualizações
- comentários
- repostagem

## Quais são os atores envolvidos

- Jean(dono da solução e ADM)
- Cliente
- Fornecedor
- Mercado pago(para o cliente efetuar o pagamento)

O sistema tem a funcionalidade de saldo para que o usuário use nas nos serviços escolhidos.

# Dúvidas

## 1. Entendimento do negócio atual

### Como o Jean vende hoje?

- **WhatsApp?** R: Sim ele posta sempre nos status essa prestação de serviços
- **Instagram?** R: também vende por lá
- **Site?** R: Ainda não existe e é isso que estamos procurando desenvolver!

### Marketplace?

### O cliente informa o perfil/link da rede social de que forma?

pelo próprio whatsapp ou insta

### O Jean possui fornecedores diferentes para cada tipo de engajamento?

Sim, temos o total de 6 fornecedores, e cada um deles tem uma qualidade diferente, por exemplo, alguns vendem seguidores reais, e curtidas reais. Outros fornecedores tem preços mais baixos só que com qualidade de curtidas e perfis não muito bons.

### Definição de o que é um bom perfil

um bom perfil não pode parecer fake, ele tem que ter um numero de seguidores alta e tem que uma Bio, e também tem que seguir algumas pessoas e não pode seguir ninguém, deve ter publicações; para cada publicação deve ter curtidas ou comentários no mínimo.

### O fornecedor entrega o serviço manualmente ou possui API?

Tem API

### O Jean paga o fornecedor antes ou depois de receber do cliente?

O Jean paga o fornecedor depois de receber do cliente

### Existe mais de um fornecedor para o mesmo serviço?

Sim

### O Jean escolhe manualmente qual fornecedor usar ou isso segue uma regra?

Escolha manual conforme cada tipo de serviço, se o usuário quer likes, pode ser o fornecedor previamente cadastrado x e para visualizações pode ser o fornecedor y

### O fornecedor entrega imediatamente ou existe um prazo?

o prazo do fornecedor é de até uma hora

### O Jean já possui uma tabela de preços?

Sim

### O lucro é fixo ou varia conforme o fornecedor utilizado?

O valor varia

## 2. Catálogo de serviços

Precisamos entender exatamente o que será vendido.

### Instagram

#### Quais serviços serão oferecidos?

- Seguidores
- Curtidas
- Comentários
- Visualizações
- Compartilhar (Share)

É o botão de aviãozinho de papel abaixo das publicações. Permite enviar o post por Direct, compartilhar nos Stories ou copiar o link. A Meta(dona do facebook) normalmente se refere a essa ação como.

- Repostagem (Repost)

É o recurso mais novo que permite republicar uma postagem para seus seguidores, semelhante a um retweet do X/Twitter. A Meta chama oficialmente de Repost. Em algumas métricas aparece como Reposts

### Existem pacotes pré-definidos ou o cliente escolhe a quantidade?

**Resposta:** O Cliente escolhe a quantidade dentro de um intervalo possível já pré-definido de cada fornecedor

**Exemplo:**

- 100 seguidores
- 500 seguidores
- 1000 seguidores

### Existe quantidade mínima e máxima?

Depende de cada fornecedor

### Os seguidores são nacionais, internacionais ou ambos?

ambos

### Existe diferenciação de preço por país?

sim

### Existem regras específicas para Instagram ou TikTok?

o perfil tem que estar aberto, ou seja não estar privado e também não pode ter restrição de idade.

## 3. Processo de compra do cliente

### O cliente precisa criar conta?

Sim

### Será possível comprar sem cadastro?

Não

### O cliente poderá acompanhar pedidos anteriores?

Sim

### O cliente poderá repetir um pedido antigo?

Caso ele tenha algum pedido anterior concluído.

### O cliente poderá cancelar um pedido?

Não

### O cliente poderá solicitar reembolso?

Não

### O sistema enviará e-mails?

Sim para recuperar senhas

### O sistema enviará notificações por WhatsApp?

Não

### O cliente terá uma área "Meus Pedidos"?

Sim

## 4. Pagamento

### O Mercado Pago será o único meio de pagamento?

Sim

### Serão aceitos

- PIX
- Cartão
- Boleto

### O pedido só será enviado ao fornecedor após confirmação do pagamento?

Sim

### Como tratar pagamentos recusados?

O sistema do jean vai informar ao usuário que algum problema no pagamento ocorreu e o mesmo pode tentar novamente

### O cliente poderá pagar parcelado?

Não

### O sistema precisa emitir nota fiscal?

Não

### O sistema precisa gerar comprovante?

sim

## 5. Integração com fornecedor

Esta é uma das partes mais importantes.

### Os fornecedores possuem API?

Sim

### Qual fornecedor será utilizado inicialmente?

Serão usados praticamente todos os fornecedores logo no começo

### Existe documentação da API?

sim

### O fornecedor retorna um código de pedido?

Sim

### O fornecedor permite consultar o status do pedido?

Sim

### Quais status existem?

Pendente, concluído, em progresso, cancelado.

**Exemplo:**

- Pendente
- Processando
- Concluído
- Cancelado

### É possível cancelar pedidos no fornecedor?

Não

### É possível solicitar reembolso ao fornecedor?

Não

quando uma publicação tiver classificada como +18 isso não será possível executar o serviço

### Um pedido pode ser parcialmente entregue?

Sim

Quando o fornecedor está processando e o usuário trocou a configuração de visibilidade do perfil de aberto para privado; isso pode comprometer o processamento em andamento. Quando isso ocorre, o fornecedor vai estornar automaticamente parcialmente o que ele não conseguiu entregar

Caso o cliente alterar o nome do perfil no momento que o processamento estiver ocorrendo isso também pode provocar uma entrega parcial com estorno automático

### Como tratar entregas parciais?

O sistema do jean tem um saldo e esse valor que foi estornado voltará ao saldo da conta do cliente

## 6. Administração (Jean)

### O Jean será o único administrador?

Sim

### O Jean poderá alterar preços?

sim

### O Jean poderá criar promoções?

Não

### O Jean poderá bloquear clientes?

Não

### O Jean poderá cancelar os pedidos?

Não

### O Jean poderá escolher manualmente um fornecedor?

sim

### O Jean poderá cadastrar novos fornecedores?

Sim

### O Jean poderá definir margem de lucro?

Sim (fora do MVP1)

### O Jean precisará de dashboards?

Sim (fora do MVP1)

## 7. Gestão de fornecedores

### O sistema deverá permitir cadastrar vários fornecedores?

Sim

### Cada fornecedor pode oferecer serviços diferentes?

Sim

### O sistema escolherá automaticamente o fornecedor mais barato?

Não

### O sistema escolherá automaticamente o fornecedor com melhor disponibilidade?

Nâo

### O Jean poderá ativar/desativar fornecedores?

Sim

### O sistema deve trocar de fornecedor automaticamente caso um esteja indisponível?

Não

## 8. Rastreamento dos pedidos

### Como o cliente acompanhará o andamento?

pena interface de pedidos

### O sistema consultará o fornecedor periodicamente?

Sim, faremos chamadas recorrentemente a cada 10 minutos para saber se o status do pedido mudou o status

### O cliente receberá aviso quando finalizar?

Sim

## 9. Segurança e prevenção de fraude

### Existe limite de compras por cliente?

Não

### Será necessário captcha?

Sim

### O sistema bloqueará pedidos duplicados?

Sim (não no MVP)

### Será necessário verificar o telefone?

verificação de telefone , e-mail, whatsapp ou mensagem pelo próprio perfil do instagram que foi solicitado a demanda.

## 10. Relatórios

### O Jean deseja visualizar

- **faturamento diário?** Nâo
- **faturamento mensal?** não
- **lucro?** não
- **pedidos por rede social?** não
- **pedidos por fornecedor?** não

### Deseja exportar relatórios para Excel?

não

### Deseja visualizar pedidos com falha?

Sim

### Deseja visualizar clientes mais recorrentes?

Sim

## 11. Regras de negócio críticas

### O cliente pode comprar engajamento para qualquer perfil ou apenas para perfis públicos?

apenas para perfis publicos

### O sistema deve validar se o perfil existe?

Não

### O sistema deve validar se a postagem existe?

Não

O sistema não realizará validações prévias de perfil ou publicação. A validação será realizada pelo fornecedor durante o processamento do pedido.

### O sistema deve impedir links inválidos?

Não

### O sistema deve impedir pedidos repetidos para o mesmo conteúdo?

Sim

### Como agir quando o fornecedor rejeita um pedido?

O valor integral consumido pelo pedido será devolvido ao saldo do cliente.

### Como agir quando o Mercado Pago aprovar um pagamento e o fornecedor estiver indisponível?

Para o cliente final vai aparecer que a solicitação falhou. No painel administrativo podemos tentar novamente com o mesmo fornecedor ou cancelar o pedido manualmente.

### Fluxo de status do pedido do cliente

- Cliente põe saldo ou faz isso já comprando o que ele quer
- Dinheiro cai pro jean
- Jean tem que ir até o fornecedor manualmente e comprar saldo para atender a demanda.

### Status para mostrar pro cliente sobre o pedido que ele faz no sistema do jean

- Solicitado
- Pago
- Processamento dos likes… ( Contempla os status do fornecedor como pendente, em progresso, falta de saldo )
- Concluído
- Feito Parcialmente
- Rejeitado

**obs.:** quando qualquer pedido tiver mais de 3 horas com status de processamento, deve-se enviar uma notificação por e-mail e telegram do administrador. obs isso nada tem haver com o cadastro do cliente. é apenas um serviço que o sistema fará em casos de acionar o administrador para alguma intervenção no sistema

## 12. Questões arquiteturais

### O objetivo é uma plataforma própria (site) ou um painel administrativo com área do cliente?

sim

### O sistema será utilizado apenas no Brasil?

Não no canadá também

### O domínio já existe?

ainda não

### Existe expectativa de quantos pedidos por dia?

15 por dia

### Existe expectativa de quantos clientes simultâneos?

no máximo 5

# 🚨 Inconsistência encontrada

## Validação de perfil

Você informou:

> O sistema não valida se o perfil existe.

Mas informou também:

> Perfil deve ser público.

Para saber se é público ou privado, normalmente precisamos validar o perfil.

### Pergunta 3

**Quem será responsável por essa validação?**

Resposta o fornecedor vai mudar o status para cancelado e isso será resolvido manualmente pelo administrador do sistema

# Perguntas adicionais obrigatórias

## Cadastro

### Pergunta 4

**O login será feito com:**

e-mail ou usuário

### Pergunta 5

**O cliente poderá alterar o próprio e-mail?**

Sim

### Pergunta 6

**O cliente poderá excluir sua conta?**

Sim

## Saldo

O saldo é uma parte central do sistema.

### Pergunta 7

**O saldo tem validade?**

Não

### Pergunta 8

**Qual moeda será utilizada?**

Real (BRL)

### Pergunta 9

**O cliente poderá solicitar o saque do saldo?**

Não

**Exemplo:**

comprou R$ 100  
não utilizou

## Serviços

### Pergunta 10

**O preço do serviço será:**

fixado pelo Jean

### Pergunta 11

**O cliente verá qual fornecedor está sendo utilizado?**

não

### Pergunta 12

**Os serviços possuem garantia?**

Sim

## Fornecedores

### Pergunta 13

**O fornecedor possui saldo próprio?**

sim, temos saldo próprio em cada fornecedor

**Exemplo:**

**Fornecedor A**

Saldo:  
R$ 500

**Fornecedor B**

Saldo:  
R$ 300

### Pergunta 14

**O sistema deve controlar automaticamente o saldo disponível em cada fornecedor?**

Não

### Pergunta 15

**Quando o saldo do fornecedor acabar:**

- **Impedir novas vendas?** Não
- **Permitir venda e deixar pendente?** Sim

## Pedidos

### Pergunta 16

**Um pedido pode conter mais de um item?**

Não

### Pergunta 17

**O cliente pode ter vários pedidos simultâneos para o mesmo perfil?**

Sim

### Pergunta 18

**Qual chave identifica um perfil?**

**Exemplo:**

URL completa seja para TikTok ou instagram

## Notificações

### Pergunta 19

Além da conclusão do pedido, o cliente será avisado quando:

- **pagamento aprovado?** sim
- **pedido rejeitado?** Sim
- **entrega parcial?** Sim

## Segurança

Você respondeu:

> verificar telefone, e-mail, whatsapp ou mensagem pelo próprio instagram

Isso precisa ser refinado.

### Pergunta 20

**Qual método será obrigatório no MVP?**

E-mail + telefone

## Sobre garantia

### Quantos dias?

30 dias pro cliente final

### Quais serviços?

Todos

### O que acontece quando a garantia é acionada?

no histórico de pedidos o usuário poderá solicitar o suporte

para cada tipo de problema o caso será analisado pelo administrador

# Observações extras

## Cadastro

para o cadastro o email do usuário será validado via email

## Exclusão de conta

Para exclusão de conta isso será desenvolvido no futuro e posto em backlog. Não faz parte do MVP1.

## Comentários

a plataforma fornece Comentários personalizados pelo cliente

e também o Fornecedor gera comentários automaticamente.

## Tipos de links

- **Seguidores Recebe:** URL do perfil
- **Curtidas Recebe:** URL da publicação
- **Visualizações Recebe:** URL da publicação
- **Comentários Recebe:** URL da publicação
