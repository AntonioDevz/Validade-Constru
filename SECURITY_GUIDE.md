# Guia de Segurança

## Visão Geral

Este documento descreve as práticas de segurança implementadas neste projeto.

## Arquitetura de Segurança

### 1. Armazenamento Local
- Dados armazenados via localStorage
- Sem transmissão de dados sensíveis para servidores externos
- Sessões gerenciadas localmente
- Backup manual via export/import de JSON

### 2. Autenticação
- Sistema de login local (demo mode)
- Dados de sessão salvos em localStorage
- Para produção, implementar sistema de autenticação externo

### 3. Backup e Sincronização
- Exportação de dados em formato JSON
- Importação para restaurar dados
- Responsabilidade do usuário manter backups

## ⚠️ Boas Práticas

### NÃO FAÇA:
- Compartilhar arquivos `.env`
- Expor URLs de banco de dados
- Commitar credenciais no código
- Deixar logs com dados sensíveis
- Compartilhar QR codes de backup públicamente
- Usar senhas fracas

### FAÇA:
- Use sempre HTTPS em produção
- Implemente validação de dados no frontend e backend
- Mantenha dependências atualizadas
- Use senhas fortes (mínimo 6 caracteres)
- Faça backups regulares dos seus dados
- Exporte dados antes de limpar o navegador

## Backup de Dados

### Como fazer backup:
1. Acesse o menu do perfil (avatar)
2. Clique em "Exportar Dados"
3. Salve o arquivo JSON em local seguro

### Como restaurar:
1. Acesse o menu do perfil
2. Clique em "Importar Dados"
3. Selecione o arquivo JSON do backup

### Importante:
- Backups contém todos os dados: produtos, retiradas, orçamentos, missões, pontos
- Armazene backups em local seguro
- Teste a restauração periodicamente

## Auditoria

Verifique regularmente:
1. Dependências desatualizadas
2. Credenciais vazadas
3. Logs de erro com dados sensíveis
4. Acesso não autorizado
5. Backups estão funcionando corretamente

## ⚠️ Limitações de Segurança

Este é um app em modo demo com as seguintes limitações:

1. **Sem criptografia de dados** - localStorage não é criptografado
2. **Sem autenticação robusta** - Sistema local simples
3. **Sem sincronização entre dispositivos** - Dados ficam apenas no navegador
4. **Sem backup automático** - Usuário deve fazer manualmente

### Para produção, considerar:
- Implementar autenticação JWT
- Usar banco de dados seguro
- Adicionar criptografia de dados sensíveis
- Implementar sync entre dispositivos
- Adicionar backup automático na nuvem
