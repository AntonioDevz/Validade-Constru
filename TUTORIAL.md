# Tutorial - Validade Constru

Guia completo de todas as funcionalidades do aplicativo.

---

## 🚀 Começando

### Primeiro Acesso
1. Abra o app no navegador
2. Clique em **"Criar Conta"**
3. Preencha: Nome, E-mail e Senha
4. Clique em **"Criar Conta"**

### Fazer Login
1. Preencha seu **e-mail** e **senha**
2. Clique em **"Entrar"**

---

## 📱 Abas do Aplicativo

O app possui 8 abas principais no menu inferior:

| Ícone | Aba | Descrição |
|-------|-----|-----------|
| 📊 | Dashboard | Visão geral e estatísticas |
| 📷 | Scanner | Leitura de códigos de barras |
| 📦 | Estoque | Lista de produtos |
| 📝 | Lista | Tarefas diárias |
| 📋 | Orçamento | Criar orçamentos |
| 📥 | Exportar | Exportar dados |
| 🚚 | Retirada | Sistema de retiradas |
| 🎯 | Missões | Tarefas gamificadas com ranking |

---

## 📊 Dashboard

A tela inicial mostra uma visão geral do estoque.

### O que você encontra:
- **Total de Produtos**: Quantidade de itens cadastrados
- **Total em Estoque**: Soma de todas as quantidades
- **Estatísticas de Validade**:
  - 🟢 Produtos OK
  - 🟡 Produtos em Alerta
  - 🔴 Produtos Vencidos
- **Alertas de Estoque**: Produtos com quantidade baixa
- **Gráfico por Categoria**: Distribuição dos produtos

### Botões Rápidos:
- "Ver Estoque" → Abre a lista de produtos
- "Lista" → Abre as tarefas diárias

---

## 📷 Scanner

Escaneie códigos de barras para adicionar ou buscar produtos.

### Como usar:
1. Clique na aba **Scanner**
2. Permite o acesso à câmera quando solicitado
3. Aponte o código de barras para o quadrado na tela
4. O app busca automaticamente o produto

### Durante uma Missão:
Quando você está fazendo uma missão de scanner:
- O modal mostra um **indicador roxo** com o progresso da missão
- Ao escanear um produto, o progresso é atualizado automaticamente
- Você pode continuar escaneando até completar a meta

### O que acontece:
- **Produto encontrado**: Mostra os dados para edição
- **Produto não encontrado**: Abre formulário para cadastrar novo

### Funcionalidades:
- Cadastro rápido de novos produtos
- Atualização de lotes existentes
- Leitura de código de barras (EAN-13, UPC-A, etc.)
- Integração com sistema de missões

---

## 📦 Estoque

Gerencie todos os produtos e lotes do seu estoque.

### Lista de Produtos
- Exibe todos os produtos cadastrados
- Mostra: Nome, categoria, quantidade, validade

### Filtros Disponíveis:
- **Todos**: Mostra todos os produtos
- **Vencidos**: Produtos com data passada
- **Alerta**: Próximos do vencimento
- **Por Categoria**: Filtra por tipo de produto

### Ações por Produto:
- ✅ Marcar como disponível
- ✏️ Editar produto
- 🗑️ Excluir produto
- 📊 Ver detalhes do lote

### Categorias Disponíveis:
- Cimento
- Argamassa
- Tintas
- Selantes
- Cal
- Vernizes
### Podem ser Criadas outras categorias!
---

## 📝 Lista Diária

Tarefas e checklists para organizar o dia.

### Como usar:
1. Crie listas de tarefas
2. Marque como concluído ao finalizar
3. Organize por prioridades

### Funcionalidades:
- Criar novas listas
- Adicionar tarefas
- Marcar tarefas como feitas
- Excluir tarefas

---

## 📋 Orçamento

Crie orçamentos e cotações para seus clientes.

### Criar Novo Orçamento:
1. Clique em **"+ Novo Orçamento"**
2. Preencha os dados do cliente:
   - Nome
   - CPF/CNPJ
   - Telefone
   - Endereço

### Adicionar Produtos/Serviços:
1. Clique em **"+"** para adicionar item
2. Preencha:
   - Descrição do produto/serviço
   - Quantidade
   - Valor unitário
3. O total é calculado automaticamente

### Configurações do Orçamento:
- **Tipo de Documento**: Orçamento ou Proposta
- **Desconto**: Percentual ou valor fixo
- **Entrada**: Valor de entrada
- **Pagamento à Vista**: Opção de desconto

### Finalizar:
1. Revise os itens
2. Adicione observações (opcional)
3. Clique em **"Salvar Orçamento"**

### Visualizar/Editar:
- Liste todos os orçamentos salvos
- Edite orçamentos existentes
- Exporte como PDF (futuro)

---

## 📥 Exportar

Exporte os dados do seu estoque para planilha.

### Tipos de Exportação:

#### 1. Exportar por Validade
- Lista todos os produtos com datas de validade
- Filtra por status (Vencidos, Vencendo, OK)
- Mostra: Produto, categoria, validade, quantidade

#### 2. Exportar por Estoque
- Lista produtos com estoque baixo
- Mostra: Produto, quantidade atual, mínimo, diferença
- Ideal para reposição

### Como Exportar:
1. Selecione o tipo de exportação
2. Aplique filtros (opcional)
3. Clique em **"Exportar para CSV"**
4. O arquivo será baixado automaticamente

### Backup Completo:
- **Exportar Dados (JSON)**: Backup completo de todos os dados
- **Importar Dados**: Restaura dados de um backup anterior

---

## 🚚 Retirada (Sistema de Notificações)

Gerencie retiradas de produtos pelos clientes.

### Criar Nova Retirada:
1. Clique na aba **"Retirada"**
2. Clique em **"+ Nova Retirada"**
3. Preencha os dados do cliente:
   - Nome do cliente
   - Telefone (opcional)
   - Observações (opcional)

### Selecionar Produtos:
1. Clique em **"Adicionar Produto"**
2. Busque pelo nome ou escaneie código
3. Informe a quantidade solicitada
4. Repita para todos os produtos
5. Clique em **"Registrar Retirada"**

### Gerenciar Retiradas:

#### Status:
- **Pendente**: Produtos aguardando retirada
- **Em Andamento**: Alguns produtos já retirada
- **Completa**: Todos os produtos foram retirada

#### Ações:
- ➕ Adicionar quantidade retirada (+)
- ➖ Remover quantidade (-)
- ✅ Marcar como completo (retira tudo)
- ❌ Cancelar item
- 🗑️ Excluir retirada

### Sistema de Notificações:

#### Tipos de Notificação:

| Tipo | Quando | Mensagem |
|------|--------|----------|
| 🚚 **Nova Retirada** | Ao cadastrar | "Nome cliente - X produto(s) aguardando" |
| 📦 **Retirada Parcial** | Ao remover alguns | "X removidos. Restam: Y" |
| ✅ **Retirada Completa** | Ao finalizar | "Todos os produtos foram retirados!" |

#### Ativar Notificações:
1. Clique no ícone de sino no menu do perfil
2. Ative o toggle **"Notificações Push"**
3. Permita quando o navegador pedir

---

## 🎯 Missões

Sistema gamificado de tarefas para organizar o estoque com ranking!

### Como Funciona:
1. Complete as missões do dia para ganhar pontos
2. Clique em uma missão para ver os detalhes
3. Escaneie ou atualize produtos relacionados
4. A cada 3 missões concluídas, você sobe de nível!

### Missões Disponíveis:
| Missão | Descrição | Meta |
|--------|-----------|------|
| Verificar produtos vencidos | Revise produtos vencidos | 3 |
| Verificar próximos do vencimento | Revise produtos próximos do prazo | 3 |
| Atualizar estoque de categoria | Conte produtos de uma categoria | 1 |
| Verificar estoque baixo | Revise produtos com estoque baixo | 3 |
| Escanear produtos | Use o scanner para verificar | 5 |
| Exportar relatório | Exporte uma planilha | 1 |

### Abrindo uma Missão:
1. Clique no **card da missão** na aba Missões
2. Veja os **produtos relacionados** à missão
3. Clique em um produto para **atualizá-lo/escaneá-lo**
4. O progresso é atualizado automaticamente!

### Sistema de Ranking:
A cada 3 missões concluídas, você **sobe 1 nível**:

| Nível | Título | Pontos |
|-------|--------|--------|
| 1 | Novato | 0+ |
| 2 | Iniciante | 50+ |
| 3 | Aprendiz | 150+ |
| 4 | Companheiro | 350+ |
| 5 | Especialista | 700+ |
| 6 | Expert | 1200+ |
| 7 | Mestre | 2000+ |
| 8 | GM | 3500+ |
| 9 | Lendário | 6000+ |
| 10 | Mythic | 10000+ |

### Bônus Extra:
Após completar uma missão:
- Você pode **"Verificar mais produtos"**
- Ganhe **50% dos pontos** como bônus extra!

### Progresso:
- Barra de progresso visual em cada missão
- Total de pontos no header
- Ranking pessoal de produtividade
- Indicador de nível no perfil do usuário

---

## 🔔 Notificações de Entrada

Ao abrir o app, você pode ver um **toast notification** com:
- Resumo de alertas do dia
- Produtos vencidos
- Próximos do vencimento
- Estoque baixo
- Retiradas pendentes

Clique em "Ver detalhes" para ir diretamente à página relevante.

---

## 👤 Menu do Perfil

Acesse pelo ícone de avatar no canto superior direito:

- **👤 Perfil**: Ver dados da conta
- **🎯 Minhas Missões e Pontos**: Ver histórico de pontos
- **🔔 Config. Notificações**: Configurar alertas de entrada
- **📤 Exportar Dados**: Backup completo
- **📥 Importar Dados**: Restaurar backup
- **🗑️ Limpar Dados**: Resetar aplicativo
- **🚪 Sair**: Desconectar conta

---

## 📊 Regras de Validade

### Alertas por Categoria:

| Categoria | Dias de Alerta |
|-----------|-----------------|
| Cimento | 15 dias |
| Argamassa | 15 dias |
| Cal | 30 dias |
| Tintas | 30 dias |
| Selantes | 30 dias |
| Vernizes | 30 dias |

### Cores de Status:

| Cor | Significado |
|-----|-------------|
| 🔴 **Vermelho** | VENCIDO - Prazo esgotado |
| 🟡 **Amarelo** | ALERTA - Próximo do vencimento |
| 🟢 **Verde** | OK - Dentro do prazo |
| ⚠️ **Amarelo** | ESTOQUE BAIXO - Abaixo do mínimo |

---

## 💾 Armazenamento

Todos os dados são salvos localmente no navegador:

- **Produtos**: Cadastrados no sistema
- **Lotes**: Datas de validade e quantidades
- **Retiradas**: Histórico de retiradas
- **Orçamentos**: Cotações salvas
- **Missões**: Tarefas diárias e progresso
- **Ranking**: Pontos e nível do usuário

### Backup:
- Dados são salvos em localStorage
- Para backup, exporte os dados pelo menu do perfil
- Em caso de limpeza do navegador, os dados serão perdidos

---

## ❓ Perguntas Frequentes

**P: Como adicionar um novo produto?**
R: Use o Scanner para escanear ou vá em Estoque > + Novo Produto

**P: Como saber quais produtos estão acabando?**
R: Veja no Dashboard os alertas de estoque baixo

**P: Como exporto minha lista de produtos?**
R: Acesse a aba "Exportar" e escolha o tipo de exportação

**P: Como funciona o sistema de ranking?**
R: Complete missões diárias para ganhar pontos. A cada 3 missões concluídas, você sobe 1 nível!

**P: Posso ganhar pontos extras?**
R: Sim! Após completar uma missão, você pode verificar mais produtos para ganhar 50% dos pontos como bônus.

**P: Como o progresso das missões funciona?**
R: Clique em uma missão para ver os produtos relacionados. Ao escanear ou atualizar um produto, o progresso é incrementado automaticamente.

**P: As notificações funcionam offline?**
R: Os dados ficam salvos offline, mas notificações push precisam de internet para chegar.

**P: Posso ter múltiplas contas?**
R: Sim, cada usuário tem seus próprios dados separados.

**P: Como recupero meus dados?**
R: Use a função de exportar dados no menu do perfil.

---

## 🆘 Suporte

Para dúvidas ou problemas:
- Verifique este tutorial
- Limpe o cache do navegador
- Entre em contato com o desenvolvedor

---

**Versão**: 2.0.0  
**Última atualização**: 2026-03-20
