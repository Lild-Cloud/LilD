# Security Policy

## Segurança no LilD

A segurança é uma prioridade máxima para o projeto LilD. Este documento descreve como reportar vulnerabilidades de segurança e nossas práticas de segurança.

## Versões Suportadas

| Versão | Suportada |
|--------|-----------|
| 1.0.x  | ✅ Sim    |
| 0.9.x  | ❌ Não    |

## Reportando Vulnerabilidades

**NÃO abra uma issue pública para reportar uma vulnerabilidade de segurança!**

Se você descobrir uma vulnerabilidade de segurança, por favor relate de forma responsável:

### Opção 1: Email Privado
Envie um email para **contato@lild.com.br** com:
- Descrição detalhada da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Sua informação de contato

### Opção 2: GitHub Security Advisory
Se você tem acesso, use a funcionalidade de Security Advisory do GitHub:
1. Vá para Settings > Security & analysis
2. Clique em "Report a vulnerability"
3. Preencha os detalhes

### Resposta
Você receberá uma resposta dentro de **48 horas** com:
- Confirmação do recebimento
- Próximos passos
- Timeline estimada para correção

## Práticas de Segurança

### Dependências
- Revisamos todas as dependências regularmente
- Usamos apenas dependências confiáveis (Font Awesome)
- Atualizamos dependências conforme necessário
- Monitoramos CVE (Common Vulnerabilities and Exposures)

### Código
- Todos os PRs são revisados antes do merge
- Não aceitamos código malicioso
- Validação de entrada do usuário
- Sem armazenamento de dados sensíveis

### HTTPS
- Site serve via HTTPS em produção
- Certificados SSL/TLS válidos
- Redirecionamento automático de HTTP para HTTPS

### Dados
- Não coletamos dados pessoais desnecessários
- Não vendemos ou compartilhamos dados
- Privacidade é respeitada
- LocalStorage apenas para preferências do usuário

## Boas Práticas para Usuários

### Para Desenvolvedores
- Mantenha as dependências atualizadas
- Não use versões antigas do LilD
- Revise o código antes de usar em produção
- Configure HTTPS ao fazer deploy

### Para Contribuidores
- Reporte vulnerabilidades responsavelmente
- Não explore vulnerabilidades
- Trabalhe com a equipe para correções
- Respeite embargos de divulgação

## Resposta a Incidentes

### Timeline de Resposta
1. **Recebimento:** Confirmação dentro de 24 horas
2. **Avaliação:** Análise dentro de 48-72 horas
3. **Correção:** Desenvolvimento do patch
4. **Teste:** Validação da correção
5. **Release:** Lançamento de versão segura
6. **Divulgação:** Comunicação pública após correção

### Comunicação
- Atualizações através de email
- Opção de receber notificações
- Transparência sobre o processo

## Checklist de Segurança

Antes de fazer deploy, verifique:

- [ ] HTTPS está ativado
- [ ] Certificado SSL é válido
- [ ] Headers de segurança estão configurados
- [ ] CORS está apropriadamente configurado
- [ ] Não há dados sensíveis no código
- [ ] Dependências estão atualizadas
- [ ] Sem console.logs contendo dados sensíveis
- [ ] Formulários validam entrada
- [ ] Senhas não são logadas
- [ ] Backups estão configurados

## Headers de Segurança Recomendados

Se você está fazendo deploy do LilD, configure estes headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' cdnjs.cloudflare.com; style-src 'self' cdnjs.cloudflare.com 'unsafe-inline'; font-src 'self' cdnjs.cloudflare.com
```

## Ferramentas de Segurança

### Monitoramento
- GitHub Security Alerts
- Dependabot
- OWASP Top 10 checks

### Testes
- HTTPS verification
- SSL/TLS validation
- Security headers testing
- OWASP scanning

## Contato de Segurança

Para qualquer questão de segurança:

- **Email:** contato@lild.com.br
- **GitHub:** [@Lild-Cloud](https://github.com/Lild-Cloud)
- **Resposta em:** 24-48 horas

## Divulgação Responsável

Ao reportar uma vulnerabilidade, pedimos que você:

1. **Não divulgue publicamente** até que tenhamos tempo de corrigir
2. **Nos dê tempo razoável** para remediar (30-90 dias)
3. **Não teste a vulnerabilidade** em dados reais de produção
4. **Forneça detalhes suficientes** para reproduzir

Fazendo isso, você nos ajuda a manter a comunidade segura!

## Agradecimentos

Obrigado aos pesquisadores de segurança e contribuidores que reportam vulnerabilidades de forma responsável.

---

**Última atualização:** 19/08/2024
**Próxima revisão:** 31/12/2024
