# YouTube Clone - ByCoders

![Preview-Screens](https://raw.githubusercontent.com/bernalvinicius/desafio-frontend/master/src/assets/images/yt-clone.png)

If you want to take a look on all screens of the App, they are [here]().

## Porquê?

Este projeto faz parte do processo seletivo para desenvolvedor Front-End enviado pela ByCoders.
O desafio consiste em fazer um projeto que consome à API do YouTube e tem um layou parecido com do YouTube.
O tanto quanto possível, busquei ser fiel ao design do YouTube em sua versão desktop de Julho/2020.

## Algumas observações sobre esse App

**1** - Como o YouTube foi desenvolvido com a base do Material Design, para este desafio utilizei o Material-UI, que traz todos os recursos do Material Design para projetos em React.

**2** - Eu criei minhas credenciais no Console de Desenvolvedor do Google, para conseguir me comunicar com a API, a minha key de acesso vai junto do código disponibilizado. Porém, durante o processo de criação deste projeto tive muitos problemas com cotas. Se vocês não conseguirem fazer o GET à API, por favor me avisem que providenciarei um nova Key para os testes.

**3** - O usuário pode fazer login na aplicação através da API do Youtube com OAuth2. Com esse acesso não tive problemas de cotas. Mas se não conseguirem fazer o login na aplicação, peço por favor que me avisem para providenciar uma nova Key.

## Funcionalidades

- Home Page, é renderizado os Componentes Header, NavBar e Main:

  - Componente Header: o usuário pode fazer login/logout ou pesquisar por algum vídeo que queira assistir;
  - Componente Main: por default, sempre na homepage aparecerá uma lista de vídeos relacionado ao tema 'React'. Um dos requisitos do teste era aparecer um conteúdo interessante ao usuário na HomePage. Esse tema vai de acordo com a biblioteca que foi construída essa aplicação;
  - Componente NavBar: este componente está estático na aplicação e foi inserido apenas com caráter de melhorar a experiência do usuário ao navegar pela Homepage.

- Results Page: é renderizado os Componentes Header, NavBar e o conteúdo da página Results:

  - Componente Header: o usuário pode fazer login/logout ou pesquisar por algum vídeo que queira assistir;
  - Componente NavBar: este componente está estático na aplicação e foi inserido apenas com caráter de melhorar a experiência do usuário ao navegar pela Homepage.
  - Results Page: quando o usuário faz uma pesquida no header sobre o tema do vídeo que deseja assistir, é na página results que é renderizado o resultado da pesquisa. Por padrão, é retornado um total de oito vídeos relacionados ao tema da pesquisa.

- Watch Page: é renderizado o Componente Header e o conteúdo da página Watch:
  - Componente Header: o usuário pode fazer login/logout ou pesquisar por algum vídeo que queira assistir;
  - Watch Page: quando o usuário está na Home ou Results Page, ele pode clicar em algum vídeo que queira assistir. Ao realizar essa ação, ele é redirecionado para a página Watch. Nesse momento, o usuário pode clicar e assistir o vídeo escolhido.

## Iniciando a Aplicação

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará de um ambiente básico para executar um aplicativo React, que pode ser encontrado [aqui.](https://reactjs.org/docs/getting-started.html)

### Instalando

**Clonando este repositório**

```
$ https://github.com/bernalvinicius/desafio-frontend.git
$ cd desafio-frontend
```

**Instalando dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

**Rodar Aplicação**

Com todas as dependências instaladas e o ambiente configurado corretamente, agora você pode executar o aplicativo::

```
$ npm start
```

## Construído com

**Obs:** Abaixo falarei sobre alguns plugins, todos eles no [Visual Studio Code](https://code.visualstudio.com/).

Após gerar um novo projeto com 'npx create-react-app', criei alguns arquivos extras para deixar a aplicação pré-configurada em níveis de compilação e indentação.

Foram criados os seguintes arquivos: (na raiz do projeto):

- **.editorconfig:**

Para este arquivo ser válido, deve ser adicionada e extensão [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig). Com a extensão instalada e o arquivo criado, pode-se definir determinadas indicações de estilo de código. Coisas como quantos espaços uma tab deve ter. Isso pode reduzir o atrito ao trabalhar com uma equipe com vários programadores. Para maiores informações: [EditorConfig](https://editorconfig.org/).

- **.prettierrc**

Para esse arquivo ser válido, deve ser adicionada a extensão [Prettier – Code formatter](https://prettier.io/). O Prettier nada mais é do que um formatador de código, ele garante que todo o código emitido esteja em conformidade com um estilo consistente. Por exemplo, você pode escrever uma linha de código que fique muito grande, pode limitar o tamanho máximo da linha para 60 caracteres e então o Prettier fará o trabalho de organizar o código para você. Com a extensão instalada e o arquivo criado pode-se dar início a configuração do arquivo. Para maiores informações: [Prettier](https://prettier.io/).

- **jsconfig.json**

O arquivo jsconfig.json especifica os arquivos raiz e as opções para os recursos fornecidos pelo serviço de JavaScript. Por exemplo, por padrão o serviço de idioma JavaScript analisará e fornecerá o IntelliSense para todos os arquivos em seu projeto JavaScript. Se você desejar especificar quais arquivos excluir ou incluir para fornecer o IntelliSense adequado, pode utilizar uma propriedade no jsconfig.json para isso. Para maiores informações: [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig).

- **.eslintrc.js**

O ESLint foi projetado para ser configurável, você pode desativar todas as regras e executar apenas com a validação básica de sintaxe, ou misturar e combinar as regras agrupadas e as regras personalizadas. Configuramos o ESLint através do arquivo .eslintrc.js, nele é especificado todas informações de configuração que desejamos aplicar. Para maiores informações: [Documentação do ESLint](https://eslint.org/docs/user-guide/configuring). Você também deve instalar a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Após a criação de todos esse arquivos e extensões, foram instaldas as seguintes dependências:

- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [React-Router](https://reactrouter.com/) - Rotas
- [Axios](https://github.com/axios/axios) - HTTP Client
- [React-Google-Login](https://github.com/anthonyjgrove/react-google-login) - Um componente de login/logout do Google OAUth para React
- [ESlint](https://eslint.org/) - Linter
- [eslint-config-airbnb](https://github.com/airbnb/javascript) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme) - Desativa todas as regras desnecessárias ou que podem entrar em conflito com o Prettier
- [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias#readme) - Este é um plugin simples de resolução de importação de módulo Node.js para eslint-plugin-import, que suporta resolução nativa de módulo Node.js, módulo de alias/mapeamento e extensões de arquivos personalizados
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Este plugin oferece suporte à sintaxe de importação/exportação do ES2015+ (ES6+) e evitar problemas com erros de ortografia de caminhos de arquivos e nomes de importação
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) - Verificador AST (árvore abstrata de sintaxe) estático para regras de acessibilidade em elementos JSX
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme) - Executa o Prettier como uma regra do ESLint e relata as diferenças como problemas individuais do ESLint
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras específicas de aprendizagem para ESLint
- [eslint-plugin-react-hooks](https://github.com/facebook/react) - Aplica as regras dos Hooks
- [Prettier](https://github.com/prettier/prettier) - Formatador de código
- [prop-types](https://github.com/facebook/prop-types) - Verificação de tipo de tempo de execução para React props e objetos semelhantes. Você pode usar prop-types para documentar os tipos pretendidos de propriedades passados aos componentes. O React verificará os props passados para seus componentes em relação a essas definições e avisará em desenvolvimento se eles não corresponderem
- [customize-cra](https://github.com/arackaf/customize-cra#readme) - Fornece um conjunto de utilitários para personalizar as configurações das versões 02 e 03 do create-react-app, aproveitando as principais funcionalidades do react-app-rewired
- [customize-cra-react-refresh](https://github.com/esetnik/customize-cra-react-refresh#readme) - Fornece uma maneira simples de integrar react-refresh ao seu create-react-app usando customize-cra e @pmmmwh/react-refresh-webpack-plugin
