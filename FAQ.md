# FAQ - Perguntas Frequentes

## Geral

### O que é LilD?

LilD é uma plataforma web completa, profissional e responsiva dedicada à educação e promoção da segurança no trabalho. Oferecemos informações sobre segurança ocupacional, recursos educacionais e ferramentas para empresas e trabalhadores.

### LilD é gratuito?

Sim! LilD é completamente gratuito e de código aberto. Você pode usar, modificar e distribuir o código sob a licença MIT.

### Como posso contribuir?

Confira [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir com código, reportar bugs ou sugerir melhorias.

### Qual é a licença?

LilD é licenciado sob a MIT License. Veja [LICENSE](LICENSE) para detalhes completos.

## Técnico

### Que tecnologias LilD usa?

LilD é construído com:
- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo
- **JavaScript Vanilla** - Funcionalidades interativas
- **Font Awesome** - Ícones

Sem dependências pesadas ou frameworks complexos!

### LilD funciona offline?

Sim! LilD inclui um Service Worker que permite funcionalidade offline. Após a primeira visita, você pode acessar o conteúdo mesmo sem conexão.

### Como instalar LilD localmente?

```bash
git clone https://github.com/Lild-Cloud/LilD.git
cd LilD
python -m http.server 8000
# Acesse http://localhost:8000
```

### O site é responsivo?

Sim! LilD é 100% responsivo e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

### Qual é a performance do site?

LilD mantém uma pontuação Lighthouse de 90+. Sendo extremamente otimizado para velocidade e performance.

### Posso usar LilD como PWA (Progressive Web App)?

Sim! LilD pode ser instalado como aplicativo no seu dispositivo:
- **Navegadores Chrome/Edge:** Clique no ícone de instalação na barra de endereço
- **Safari iOS:** Use "Adicionar à Tela Inicial"

## Segurança

### Meus dados são seguros?

LilD não coleta ou armazena dados pessoais por padrão. O formulário de contato é apenas informativo.

### LilD usa cookies?

LilD usa apenas localStorage para salvar preferências (como tema). Não usamos cookies de rastreamento invasivos.

### Como reportar uma vulnerabilidade?

Se encontrar um problema de segurança, abra uma issue privada no GitHub ou envie um email para contato@lild.com.br.

## Uso

### Como navegar pelo site?

Use o menu de navegação no topo com as abas:
- **Início** - Homepage com visão geral
- **Segurança Ocupacional** - Conceitos fundamentais
- **Tópicos em Destaque** - 6 temas principais
- **Recursos Úteis** - Documentos e ferramentas
- **Contato** - Formulário de contato
- **Developers** - Informações técnicas

### Como enviar uma mensagem?

1. Clique em "Contato" no menu
2. Preencha o formulário com seus dados
3. Clique em "Enviar Mensagem"

Nota: Para versão 1.0, o formulário simula o envio. Integração com servidor será adicionada em versões futuras.

### Posso se inscrever na newsletter?

Sim! Há um formulário de newsletter no rodapé. Digite seu email e clique "Inscrever".

Nota: Similar ao formulário de contato, a integração real será adicionada em breve.

### O site suporta múltiplas idiomas?

Atualmente, LilD está em Português (Brasil). Suporte multilíngue será adicionado na v2.5 (2025).

## Acesso e Acessibilidade

### LilD é acessível?

Sim! LilD segue padrões WCAG 2.1 AA com:
- Navegação por teclado
- Alt text em imagens
- Contraste adequado de cores
- Labels em formulários
- ARIA labels onde necessário

### Posso aumentar o tamanho da fonte?

Sim! Use as funcionalidades do seu navegador:
- **Chrome/Edge:** Ctrl + / ou Cmd + /
- **Firefox:** Ctrl + + ou Cmd + +
- **Safari:** Cmd + +

### O site funciona com leitores de tela?

Sim! LilD foi desenvolvido com acessibilidade em mente e funciona com:
- NVDA
- JAWS
- VoiceOver
- Outros leitores de tela padrão

## Conteúdo

### Quem escreve o conteúdo?

O conteúdo é desenvolvido por especialistas em segurança do trabalho e mantido pela comunidade de contribuidores.

### Como reportar um erro no conteúdo?

Abra uma issue no GitHub descrevendo o erro e sua localização.

### Posso sugerir novo conteúdo?

Absolutamente! Abra uma issue com a tag `feature` ou `enhancement` descrevendo sua sugestão.

### O conteúdo é atualizado regularmente?

Sim! Buscamos manter o conteúdo atualizado com as últimas tendências e regulamentações de segurança.

## Deploy e Hospedagem

### Como faço deploy de LilD?

Confira [DEPLOYMENT.md](DEPLOYMENT.md) para guias detalhados sobre:
- GitHub Pages
- Vercel
- Netlify
- Servidor próprio

### Quanto custa hospedar LilD?

Muitas opções são gratuitas ou muito baratas:
- **GitHub Pages:** Gratuito
- **Vercel:** Gratuito com plano pago
- **Netlify:** Gratuito com plano pago
- **Servidor próprio:** Varia

## Suporte

### Como obtenho suporte?

- **Issues:** Abra uma no [GitHub](https://github.com/Lild-Cloud/LilD/issues)
- **Email:** contato@lild.com.br
- **Discussões:** Participar de discussions no GitHub

### Qual é o tempo de resposta para suporte?

Respondemos às issues normalmente em 24-48 horas, dependendo da complexidade.

### Há um forum ou comunidade?

Você pode participar das discussions no GitHub. Um forum dedicado será adicionado em futuras versões.

## Desenvolvimento

### Posso usar LilD como base para meu projeto?

Sim! Sob a licença MIT, você pode usar, modificar e redistribuir o código.

### Como reportar um bug?

1. Verifique se já existe issue similar
2. Abra uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. observado
   - Screenshot/vídeo se possível

### Como sugerir uma feature?

Abra uma issue com a tag `feature` e descreva:
- O que você gostaria que fosse adicionado
- Por que seria útil
- Exemplos de como funcionaria

### Qual é o processo de revisão de PR?

1. Faça um fork e crie sua branch
2. Faça commit com mensagens claras
3. Abra um Pull Request com descrição detalhada
4. Aguarde revisão e feedback
5. Após aprovação, será feito merge

## Roadmap

### Qual é o futuro do LilD?

Confira [ROADMAP.md](ROADMAP.md) para o plano de desenvolvimento futuro, incluindo:
- v1.1: Melhorias visuais e funcionalidades
- v2.0: Backend e autenticação
- v2.5: Internacionalização
- v3.0: Apps móveis

### Quando será a próxima versão?

Consulte o ROADMAP para datas estimadas. As versões são lançadas conforme o desenvolvimento progride.

## Outros

### Como entro em contato com os criadores?

- **GitHub:** [@Lild-Cloud](https://github.com/Lild-Cloud)
- **Email:** contato@lild.com.br
- **Website:** https://lild-cloud.github.io/LilD/

### Posso usar LilD comercialmente?

Sim! Sob a licença MIT, você pode usar LilD para fins comerciais.

### Há uma política de privacidade?

LilD não coleta dados pessoais. Não há política de privacidade extensa necessária no momento. Quando integrarmos analytics ou formulários reais, uma política será adicionada.

### Onde posso ver o código-fonte?

Todo o código está disponível no [GitHub](https://github.com/Lild-Cloud/LilD). Você pode revisar, estudar e contribuir!

### É seguro usar LilD em produção?

Sim! LilD é seguro para uso em produção. Não há código malicioso ou vulnerabilidades conhecidas. Sempre mantenha as dependências (Font Awesome) atualizadas.

---

## Ainda tem dúvidas?

**Abra uma issue no GitHub ou envie um email para contato@lild.com.br**

Estamos aqui para ajudar! 🙂
