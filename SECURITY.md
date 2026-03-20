# Política de Segurança

## 📌 Reportando Vulnerabilidades

Se você encontrar uma vulnerabilidade de segurança, por favor:
1. **NÃO** crie uma issue pública
2. Envie um email para: security@example.com
3. Descreva a vulnerabilidade em detalhes
4. Aguarde resposta em até 48 horas

## 🔒 Dados Sensíveis

### NUNCA comitar:
- [ ] Arquivos `.env` com credenciais reais
- [ ] Arquivos `.pem`, `.key`, certificados
- [ ] URLs de banco de dados em produção
- [ ] API keys ou secrets
- [ ] Senhas de banco de dados
- [ ] Tokens de acesso
- [ ] Arquivos de backup do banco

### SEMPRE usar:
- [ ] `.env.example` com valores placeholder
- [ ] Variáveis de ambiente
- [ ] Secrets do GitHub/vercel/netlify

## 🚀 Configuração Segura

### Variáveis de Ambiente
```bash
# Copiar exemplo
cp .env.example .env

# Editar com valores seguros
nano .env
```

## 🔐 Checklist de Segurança

Antes de cada deploy:

- [ ] Remover credenciais de desenvolvimento
- [ ] Verificar `.gitignore` está funcionando
- [ ] Confirmar `.env` não está no repositório
- [ ] Habilitar HTTPS
- [ ] Configurar CORS corretamente
- [ ] Remover logs de debug em produção

## 📱 Dados do Usuário

Este app trata:
- Dados pessoais (nome, email, telefone)
- Dados de produtos (estoque, validade)
- Dados de retiradas (clientes, produtos)
- Dados de orçamentos

### Armazenamento:
- Dados locais: localStorage
- Sem banco de dados externo

## 📞 Contato

Para questões de segurança: **security@example.com**

---

Última atualização: 2026-03-20
