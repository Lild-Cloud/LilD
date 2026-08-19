# LilD Deployment Guide

## 🚀 Deploy no GitHub Pages

### Passo 1: Ativar GitHub Pages

1. Vá para **Settings** do repositório
2. Navegue até **Pages** (no menu lateral)
3. Em **Source**, selecione **main** branch
4. Clique em **Save**

Seu site estará disponível em: `https://lild-cloud.github.io/LilD/`

## 🚀 Deploy em outros servidores

### Vercel

1. Acesse [Vercel.com](https://vercel.com/)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Clique em "Deploy"

### Netlify

1. Acesse [Netlify.com](https://www.netlify.com/)
2. Conecte seu GitHub
3. Selecione o repositório LilD
4. Configure: **Publish directory:** `.` (ou deixe em branco)
5. Clique em "Deploy site"

### Servidor Próprio (cPanel)

1. Faça upload dos arquivos para **public_html**
2. Garanta que **index.html** está na raiz
3. Configure as permissões: 755 para pastas, 644 para arquivos

## 📋 Checklist Pré-Deploy

- [ ] Todos os links funcionam
- [ ] Formulários estão configurados
- [ ] Imagens carregam corretamente
- [ ] Responsividade testada em mobile
- [ ] Performance otimizada
- [ ] HTTPS configurado
- [ ] Meta tags corretas
- [ ] Analytics configurado (se necessário)

## 🔧 Configurações Importantes

### HTTPS
Sempre use HTTPS em produção. GitHub Pages, Vercel e Netlify fornecem SSL automaticamente.

### CORS
Se integrar com APIs externas, configure CORS apropriadamente.

### Cache
Configure headers de cache para melhor performance:

```apache
# .htaccess
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### Segurança
- Sempre valide entrada do usuário
- Use HTTPS
- Configure CSP (Content Security Policy)
- Mantenha dependências atualizadas

## 📊 Monitoramento

### Google Analytics
Descomente a tag no `index.html` e adicione seu ID de rastreamento.

### Lighthouse
Teste regularmente com o Lighthouse para manter qualidade:
- Performance
- Acessibilidade
- SEO
- Boas práticas

## 🔄 Atualizações

Para atualizar o site após deploy:

1. Faça alterações no código
2. Commit: `git commit -m "descrição"`
3. Push: `git push origin main`
4. Deploy automático (GitHub Pages/Vercel/Netlify)

## ❓ Troubleshooting

### Site não aparece após deploy

- Aguarde alguns minutos (pode levar tempo para propagação)
- Verifique se o repositório está público
- Verifique o branch correto nas configurações

### Recursos não carregam

- Verifique URLs (use caminhos relativos)
- Confirme permissões dos arquivos
- Limpe cache do navegador

### Formulário não funciona

- Configure um backend (Firebase, Formspree, etc.)
- Ou use uma solução serverless (Netlify Forms)

## 📞 Suporte

Encontrou problemas? Abra uma issue no GitHub!
