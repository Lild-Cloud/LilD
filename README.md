# LilD - Segurança no Trabalho

## 📋 Descrição

LilD é uma plataforma web completa, profissional e responsiva dedicada à educação e promoção da segurança no trabalho. O site oferece informações detalhadas sobre segurança ocupacional, tópicos em destaque, recursos úteis e uma seção exclusiva para desenvolvedores.

## ✨ Características

- 🎯 **Interface Profissional** - Design moderno e atrativo
- 📱 **Totalmente Responsivo** - Funciona em desktop, tablet e mobile
- ⚡ **Rápido e Leve** - Sem dependências externas pesadas (apenas Font Awesome)
- 🎨 **Paleta de Cores Moderna** - Tons de ouro, azul-escuro e brancos
- 🌙 **Modo Dark/Light** - Suporte para tema escuro (em desenvolvimento)
- ♿ **Acessível** - Segue padrões WCAG 2.1
- 📊 **Navegação Intuitiva** - Menu sticky com abas funcionais
- 🔔 **Sistema de Alertas** - Feedback visual para o usuário
- 📧 **Formulários Funcionais** - Contato e newsletter

## 🗂️ Estrutura do Projeto

```
LilD/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
├── LICENSE                    # Licença MIT
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos CSS principais
│   ├── js/
│   │   └── script.js         # Lógica JavaScript
│   └── images/               # Imagens e ícones (futuro)
```

## 🚀 Como Começar

### Requisitos
- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para Font Awesome)

### Instalação Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Lild-Cloud/LilD.git
   cd LilD
   ```

2. **Abra no navegador:**
   - Simplesmente abra o arquivo `index.html` no navegador, ou
   - Use um servidor local:

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (com http-server)
   npx http-server
   ```

3. **Acesse:**
   - Abra `http://localhost:8000` no navegador

## 📄 Páginas e Seções

### 1. **Início (Home)**
- Hero section com chamada à ação
- Estatísticas impressionantes
- Cards destacados com links para outras seções

### 2. **Segurança Ocupacional**
- Definição e conceitos fundamentais
- Pilares da segurança (Proteção, Prevenção, Preparação, Legislação)
- Responsabilidades (Empregadores, Trabalhadores, Governo)
- Benefícios comprovados

### 3. **Tópicos em Destaque**
- Saúde Mental no Trabalho
- Prevenção de Acidentes
- Treinamento e Capacitação
- Saúde Ocupacional
- Segurança Contra Incêndios
- Equipamento de Proteção (EPIs)

### 4. **Recursos Úteis**
- Normas Regulamentadoras (NRs)
- Vídeos Educativos
- Modelos e Templates
- Cursos Online
- Links Úteis
- Contatos Importantes

### 5. **Contato**
- Formulário de contato funcional
- Informações de contato da empresa
- Integração com Newsletter

### 6. **Para Desenvolvedores**
- Informações técnicas
- Tecnologias utilizadas
- Guia de instalação
- Estrutura do projeto
- Como contribuir
- Diretrizes de desenvolvimento
- Stack recomendado

## 🎨 Design e Cores

### Paleta de Cores
- **Primária:** `#D4A574` (Ouro)
- **Secundária:** `#2C3E50` (Azul-escuro)
- **Escura:** `#1A1F2E` (Preto)
- **Clara:** `#F5F7FA` (Branco-acinzentado)
- **Sucesso:** `#27AE60` (Verde)
- **Alerta:** `#F39C12` (Laranja)
- **Perigo:** `#E74C3C` (Vermelho)

### Tipografia
- **Font Primária:** Segoe UI, Tahoma, Geneva, Verdana
- **Font de Código:** Courier New, monospace
- **Font de Ícones:** Font Awesome 6.4.0

## 🛠️ Funcionalidades JavaScript

### Navegação
- Troca de páginas sem recarregar
- Navegação via abas
- Menu mobile responsivo

### Formulários
- Validação básica
- Envio de dados
- Feedback visual com alertas

### Interatividade
- Animações ao scroll
- Transições suaves
- Efeitos hover nos cards

### Utilitários
- Cópia para clipboard
- Formatação de datas
- Rastreamento de eventos
- Service Worker (offline support)

## 📱 Responsividade

O site está otimizado para:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

Breakpoints principais:
- `@media (max-width: 768px)` - Tablets e dispositivos pequenos
- `@media (max-width: 480px)` - Smartphones

## ♿ Acessibilidade

- Semântica HTML5 apropriada
- Contraste de cores WCAG AA
- Labels em formulários
- Alt text em imagens (quando implementadas)
- Navegação por teclado
- ARIA labels quando necessário

## 🔒 Segurança

- Sem código malicioso
- Entrada de usuário validada
- Sem armazenamento de dados sensíveis localmente
- HTTPS recomendado para produção

## 📈 Performance

- Sem dependências pesadas
- CSS otimizado
- JavaScript assíncrono
- Lazy loading pronto (para imagens futuras)
- Lighthouse score objetivo: 90+

## 🤝 Como Contribuir

1. **Fork do repositório**
   ```bash
   git clone https://github.com/seu-usuario/LilD.git
   cd LilD
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/MinhaFeature
   ```

3. **Faça as alterações**
   - Edite os arquivos necessários
   - Teste as mudanças localmente
   - Verifique a responsividade

4. **Commit e Push**
   ```bash
   git commit -m 'Adiciona MinhaFeature'
   git push origin feature/MinhaFeature
   ```

5. **Abra um Pull Request**
   - Descreva suas mudanças
   - Referencie issues relacionadas
   - Aguarde review

## 📋 Checklist para Contribuições

- [ ] Código testado localmente
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Sem erros no console
- [ ] Acessibilidade mantida
- [ ] Estilos consistentes
- [ ] Comentários em código complexo
- [ ] README atualizado se necessário

## 🐛 Reportando Bugs

Encontrou um problema? Abra uma [issue no GitHub](https://github.com/Lild-Cloud/LilD/issues)!

Por favor, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. observado
- Screenshots se aplicável
- Navegador e versão

## 💡 Sugestões de Recursos Futuros

- [ ] Blog com artigos sobre segurança
- [ ] Fórum de discussão
- [ ] Sistema de usuários e login
- [ ] Quizzes e testes de conhecimento
- [ ] Dashboard com estatísticas
- [ ] App móvel nativa
- [ ] API REST para integração
- [ ] Sistema de certificados
- [ ] Multilíngue (EN, ES, FR)
- [ ] Dark mode completo

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de navegadores
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Acessibilidade
- [Font Awesome](https://fontawesome.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### MIT License Summary
Você é livre para:
- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar privadamente

Sob as condições:
- ℹ️ Incluir aviso de licença
- ℹ️ Incluir cópia da licença

## 👥 Autores e Contribuidores

- **Lild-Cloud** - Autor inicial

Veja [contributors](https://github.com/Lild-Cloud/LilD/graphs/contributors) para uma lista de todos os contribuidores.

## 📞 Contato

- **GitHub:** [@Lild-Cloud](https://github.com/Lild-Cloud)
- **Email:** contato@lild.com.br
- **Website:** https://lild-cloud.github.io/LilD/

## 🙏 Agradecimentos

Obrigado a todos os que contribuem para melhorar a segurança no trabalho!

---

**Feito com ❤️ por Lild-Cloud**

*Segurança no Trabalho é responsabilidade de todos.*
