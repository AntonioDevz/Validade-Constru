# Validade Constru 🚧

> Sistema web de Gestão de Validade para Lojas de Materiais de Construção.

## ⚠️ Segurança

Antes de começar, leia [SECURITY.md](SECURITY.md) para diretrizes de segurança.

### Dados Sensíveis
- **NUNCA** comite arquivos `.env`
- **NUNCA** exponha chaves de API no código
- **SEMPRE** use variáveis de ambiente para configurações

---

## Funcionalidades

- **Dashboard**: Visão geral com total de itens vencendo em 30 dias, valor em risco e gráfico por categoria
- **Scanner**: Leitura de código de barras via câmera para entrada de produtos
- **Lista de Estoque**: Filtros por status (Vencidos, Vencendo, No Prazo) e por categoria
- **Gestão de Produtos**: CRUD completo de produtos e lotes
- **Exportação**: Exportar dados para CSV
- **Retiradas**: Sistema de gestão de retiradas com histórico
- **Orçamentos**: Criação e gerenciamento de orçamentos
- **Missões**: Sistema gamificado com ranking e progresso
- **Toast Notifications**: Alertas de entrada no app
- **Sincronização**: Backup via JSON e GitHub

## Sistema de Missões 🎯

### Como Funciona:
1. Complete missões diárias para ganhar pontos
2. A cada 3 missões concluídas, você sobe 1 nível de ranking
3. Clique em uma missão para ver os detalhes e produtos relacionados
4. Escaneie ou atualize produtos para progredir nas missões

### Tipos de Missões:
- **Verificar produtos vencidos**: Revise 3 produtos vencidos
- **Verificar próximos do vencimento**: Revise produtos próximos do prazo
- **Atualizar estoque de categoria**: Conte e atualize produtos de uma categoria
- **Verificar estoque baixo**: Revise produtos com estoque ≤ 5
- **Escanear produtos**: Use o scanner para verificar 5 produtos
- **Exportar relatório**: Exporte uma planilha

### Ranking:
| Nível | Título | Pontos |
|-------|--------|--------|
| 1 | Novato | 0 |
| 2 | Iniciante | 50 |
| 3 | Aprendiz | 150 |
| 4 | Companheiro | 350 |
| 5 | Especialista | 700 |
| 6 | Expert | 1200 |
| 7 | Mestre | 2000 |
| 8 | GM | 3500 |
| 9 | Lendário | 6000 |
| 10 | Mythic | 10000 |

### Bônus Extra:
- Após completar uma missão, você pode verificar mais produtos
- Ganhe 50% dos pontos como bônus extra!

## Regras de Negócio

- **Cimento/Argamassa**: Alerta 15 dias antes do vencimento
- **Outros produtos**: Alerta 30 dias antes do vencimento

### Cores por Status
- 🔴 **Vencido**: Produtos com data passada
- 🟡 **Alerta**: < 30 dias (ou < 15 dias para cimento/argamassa)
- 🟢 **OK**: > 60 dias até o vencimento

## Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/validade-constru.git
cd validade-constru

# Abra diretamente no navegador
# Ou use um servidor local:
npx serve .

# Ou abra com Python:
python -m http.server 8000
```

## Estrutura do Projeto

```
validade-constru/
├── index.html              # App web principal (standalone)
├── index.orcamento.html    # Módulo de orçamentos
├── manifest.json           # PWA manifest
├── package.json           # Configuração do projeto
├── README.md
├── TUTORIAL.md
├── PROJETO.md
├── SECURITY.md
├── SECURITY_GUIDE.md
├── LICENSE
└── .gitignore
```

## Como Usar

1. Abra `index.html` no navegador
2. Crie uma conta ou faça login
3. Comece a cadastrar seus produtos
4. Use o Scanner para adicionar/atualizar produtos
5. Complete missões diárias para ganhar pontos e subir de ranking!

## Tecnologias

- **HTML/CSS/JavaScript**: Vanilla JS para máxima performance
- **PWA**: Funciona offline como aplicativo web
- **localStorage**: Armazenamento local de dados
- **Barcode Detection API**: Scanner de código de barras

## Scripts Disponíveis

```bash
npm start          # Iniciar servidor local
npm run lint       # Verificar código
```

## Modo Demo

O aplicativo funciona completamente em modo demo, usando dados locais (localStorage). Não é necessário configurar banco de dados.

## Licença

MIT - Consulte [LICENSE](LICENSE) para detalhes.
