# Validade Constru - MVP
Gestão de Validade para Lojas de Materiais de Construção

## Estrutura de Pastas

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

## Regras de Negócio

### Cálculo de Criticidade
- **Cimento/Argamassa**: Alerta 15 dias antes do vencimento (risco de empedramento)
- **Outros produtos**: Alerta 30 dias antes do vencimento

### Cores por Status
- 🔴 **Vencido**: Produtos com data passada
- 🟡 **Alerta**: < 30 dias (ou < 15 dias para cimento/argamassa)
- 🟢 **OK**: > 60 dias até o vencimento

## Sistema de Missões 🎯

### Estrutura de Missão
```javascript
{
  id: number,
  titulo: string,           // "Verificar produtos vencidos"
  descricao: string,        // "Revise 3 produtos vencidos"
  tipo: string,             // 'vencidos' | 'proximos' | 'categoria' | 'estoque_baixo' | 'scanner' | 'export'
  categoria: string | null, // Para missões de categoria
  meta: number,             // Quantidade necessária (ex: 3)
  atual: number,            // Progresso atual (ex: 1)
  completa: boolean,        // Se foi concluída
  pontos: number            // Pontos awarded (ex: 10)
}
```

### Tipos de Missões
| Tipo | Descrição | Produtos Exibidos |
|------|-----------|-------------------|
| `vencidos` | Verificar produtos vencidos | Produtos com data < hoje |
| `proximos` | Verificar próximos do vencimento | Produtos vencendo em ≤30 dias |
| `categoria` | Atualizar estoque de categoria | Produtos da categoria específica |
| `estoque_baixo` | Verificar estoque baixo | Produtos com quantidade ≤ 5 |
| `scanner` | Escanear produtos | Qualquer produto |
| `export` | Exportar relatório | N/A (ação manual) |

### Sistema de Ranking
```javascript
// Níveis de ranking
const ranks = [0, 50, 150, 350, 700, 1200, 2000, 3500, 6000, 10000];
const rankNames = ['Novato', 'Iniciante', 'Aprendiz', 'Companheiro', 
                   'Especialista', 'Expert', 'Mestre', 'GM', 'Lendário', 'Mythic'];
```

### Lógica de Level Up
- A cada **3 missões concluídas**, o usuário sobe **1 nível de ranking**
- Ao subir de nível, recebe **10% dos pontos do próximo rank** como bônus
- Progresso de ranking resetado após level up

### Fluxo de Missão Scanner
1. Usuário clica na missão → Abre modal de detalhes
2. Botão "Escanear Produtos" → Vai para aba Scanner
3. Ao escanear produto:
   - Se missão scanner ativa, modal mostra indicador roxo
   - Ao salvar, progresso incrementa automaticamente
4. Clique em produto da lista → Abre modal de edição
5. Ao salvar, progresso incrementa

### Bônus Extra
- Disponible após completar missão principal
- Usuário pode "verificar todos" os produtos restantes
- Ganha **50% dos pontos** como bônus extra

## Armazenamento de Dados

O aplicativo utiliza **localStorage** para armazenamento de dados locais.

### Estrutura de Dados

#### Produtos
```javascript
{
  id: string,
  nome: string,
  ean_code: string | null,
  categoria: string,
  marca: string | null,
  quantidade: number,
  preco_compra: number,
  preco_venda: number,
  min_estoque_alerta: number,
  created_at: string
}
```

#### Lotes
```javascript
{
  id: string,
  produto_id: string,
  data_fabricacao: string | null,
  data_validade: string,
  quantidade: number,
  created_at: string
}
```

#### Retiradas
```javascript
{
  id: number,
  cliente: string,
  telefone: string,
  observacoes: string,
  produtos: RetiradaProduto[],
  data: string,
  status: 'pendente' | 'concluida'
}
```

#### Usuário (missões e ranking)
```javascript
{
  // ... outros campos
  pontos: number,
  pontosHistory: { pontos: number, missao: string, data: string }[],
  missoes: Missao[],
  missoesCompletadasRanking: number  // Contador para level up
}
```

## Funcionalidades

1. **Dashboard** - Visão geral com estatísticas
2. **Scanner** - Leitura de código de barras
3. **Lista de Estoque** - Gerenciamento de produtos e lotes
4. **Exportação** - Exportar dados para CSV
5. **Retiradas** - Sistema de retirada de produtos
6. **Orçamentos** - Criação de orçamentos
7. **Missões** - Sistema gamificado com ranking e progresso
8. **Toast Notifications** - Alertas de entrada no app
9. **Backup** - Exportar/Importar dados JSON

## Tecnologias

- HTML5 / CSS3 / JavaScript (Vanilla)
- PWA (Progressive Web App)
- localStorage para persistência
- Barcode Detection API para scanner

## Variáveis Globais de Missão
```javascript
let currentMissionProductId = null;  // ID do produto sendo verificado na missão
let currentMissionId = null;         // ID da missão ativa
```

## Funções Principais de Missão

| Função | Descrição |
|--------|-----------|
| `openMissionDetail(id)` | Abre modal com detalhes da missão |
| `openMissionProductEdit(productId, missionId)` | Abre edição de produto para missão |
| `incrementMissionProgress(missionId)` | Incrementa progresso após salvar |
| `goToScannerFromMission(missionId)` | Navega para scanner com missão ativa |
| `claimMissionBonus(id)` | Executa ação de bônus extra |
| `checkRankingUp()` | Verifica se usuário deve subir de nível |
| `addPoints(pontos, missao, isBonus)` | Adiciona pontos e verifica level up |

## Como Funciona

1. Abra `index.html` no navegador
2. Crie uma conta de usuário
3. Cadastre seus produtos
4. Escaneie códigos de barras
5. Complete missões diárias para ganhar pontos
6. Suba de ranking a cada 3 missões!
7. Gerencie retiradas de clientes
8. Exporte relatórios

## Suporte a PWA

O app funciona como PWA:
- Instalável no desktop e mobile
- Funciona offline
- Acesso à câmera para scanner
