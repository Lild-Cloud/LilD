# LilD - Contributing Guidelines

## Bem-vindo! 👋

Obrigado por se interessar em contribuir para o LilD! Este documento fornece diretrizes e instruções para contribuir.

## Código de Conduta

Por favor, note que este projeto é mantido com um Código de Conduta. Ao participar, você está concordando em cumpri-lo.

### Nossos Padrões

- Seja respeitoso com outros contribuidores
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros da comunidade

## Como Posso Contribuir?

### 1. Reportando Bugs 🐛

Antes de criar um relatório de bug, verifique a lista de issues - você pode descobrir que não precisa criar um novo.

**Como relatar um bug:**

- **Use um título claro e descritivo**
- **Descreva os passos exatos para reproduzir** o problema
- **Forneça exemplos específicos** para demonstrar os passos
- **Descreva o comportamento observado** e **o que você esperava ver**
- **Inclua screenshots** se possível
- **Mencione seu navegador e versão**

### 2. Sugerindo Melhorias 💡

As sugestões de melhorias são sempre bem-vindas!

**Ao enviar uma sugestão de melhoria:**

- **Use um título claro e descritivo**
- **Forneça uma descrição detalhada** da melhoria sugerida
- **Liste algumas exemplos** de como a melhoria funcionaria
- **Explique por que essa melhoria seria útil**

### 3. Fazendo Pull Requests

**Process para enviar um Pull Request:**

1. Fork o repositório
2. Clone seu fork: `git clone https://github.com/seu-usuario/LilD.git`
3. Crie uma branch: `git checkout -b feature/MinhaFeature`
4. Faça suas mudanças
5. Commit: `git commit -m 'Adiciona MinhaFeature'`
6. Push: `git push origin feature/MinhaFeature`
7. Abra um Pull Request no GitHub

### 4. Melhorias de Documentação 📚

A documentação é tão importante quanto o código! Se você encontrar erros ou tiver sugestões:

- Corrija erros de digitação
- Melhore a clareza das explicações
- Adicione exemplos
- Atualize a documentação desatualizada

## Padrões de Desenvolvimento

### Estrutura do Código

```
assets/
├── css/
│   └── style.css        # Estilos CSS
├── js/
│   └── script.js        # Lógica JavaScript
└── images/              # Imagens e ícones
```

### Convenções de Código

#### HTML
- Use indentação de 4 espaços
- Use atributos alt em imagens
- Mantenha o código semântico

#### CSS
- Use classes para estilos
- Siga a estrutura BEM quando necessário
- Use variáveis CSS para cores e valores reutilizáveis
- Mobile-first approach

#### JavaScript
- Use const por padrão
- Adicione comentários em funções complexas
- Use nomes descritivos para variáveis
- Evite var, prefira let/const

### Checklist Antes de Fazer um PR

- [ ] Código testado localmente
- [ ] Sem erros no console do navegador
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Acessibilidade mantida
- [ ] Estilos consistentes com o resto do projeto
- [ ] Comentários adicionados em código complexo
- [ ] Nenhuma dependência desnecessária adicionada

## Diretrizes de Commit

Use commits claros e descritivos:

```bash
git commit -m "Adiciona validação de formulário de contato"
git commit -m "Corrige bug na navegação mobile"
git commit -m "Melhora performance do carregamento de imagens"
```

**Prefixos recomendados:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação, estilos CSS
- `refactor:` - Refatoração de código
- `test:` - Adição de testes
- `chore:` - Mudanças em build ou dependências

## Solicitações de Pull Request

Ao enviar um PR:

1. **Título claro:** `Adiciona seção de FAQ`
2. **Descrição detalhada:**
   - O que foi mudado?
   - Por quê?
   - Como testar?
3. **Screenshots:** Se forem mudanças visuais
4. **Issues relacionadas:** Referencie com `#123`

### Template de PR

```markdown
## Descrição
Breve descrição do que foi feito.

## Tipo de Mudança
- [ ] Bug fix (mudança que corrige um issue)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Mudança de documentação
- [ ] Melhoria de performance

## Como Testar
Instruções para testar a mudança:
1. Passo 1
2. Passo 2
3. Etc.

## Screenshots
Adicione screenshots se relevante.

## Checklist
- [ ] Meu código segue as convenções de estilo do projeto
- [ ] Testei as mudanças localmente
- [ ] Não há mudanças desnecessárias
- [ ] Atualizei a documentação se necessário
```

## Reconhecimento

Os contribuidores será reconhecidos no arquivo README.md após o merge do PR.

## Perguntas?

- Abra uma [issue](https://github.com/Lild-Cloud/LilD/issues) com a tag `question`
- Envie um email para contato@lild.com.br

---

**Obrigado por contribuir! 🙏**
