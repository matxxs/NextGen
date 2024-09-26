
# Conversational Libras Communication (CLComm)

O **CLComm** é um aplicativo com a visão de facilitar a comunicação para pessoas com deficiências visuais e auditivas. Ele permite a tradução de texto para a linguagem de sinais e captura de movimentos para facilitar a comunicação entre pessoas.

#

### Clonando o Projeto

Se você quiser clonar o repositório do nosso projeto e testá-lo diretamente em seu ambiente, siga os passos abaixo:

####  1. Clone o repositório em sua máquina:

```bash
git clone git@github.com:matxxs/NextGen.git
```

#### 2. Navegue até o diretório do projeto:
```bash
cd NextGen
```

#### 3. Instale as dependências necessárias:
```bash
npm install
```
#### 4. Execute o projeto:
```bash
npx expo start
```
Agora, você pode testar o projeto em um simulador ou dispositivo físico. O QR Code gerado será exibido no terminal ou no navegador, permitindo que você visualize a aplicação no Expo Go.


## Configuração do Projeto

### 1. Criação do Projeto

Utilizamos o comando npx para iniciar o projeto, juntamente com um template em branco configurado com TypeScript, visando uma estrutura mais organizada e escalável para o desenvolvimento.

Esse template em branco com suporte a TypeScript oferece uma base sólida para tipagem estática, permitindo um desenvolvimento mais fluido, seguro e fácil de manter.

Comando utilizado:
```bash
npx create-expo-app@latest --template blank-typescript
```

### 2. Pacotes Utilizados no Projeto

Para habilitar o suporte ao desenvolvimento web, instale o pacote **react-native-web** com o comando:

```bash
npx expo install react-native-web
```

- **react-native-web**: Permite o desenvolvimento da aplicação para a web utilizando o mesmo código base do aplicativo móvel.

Essa configuração padrão já inclui o **Expo** configurado, permitindo que você comece rapidamente o desenvolvimento. Após a criação do projeto, basta escanear o **QR Code** gerado para rodar o aplicativo em seu dispositivo.

### 3. Utilizando Simuladores

Caso você queira testar o aplicativo em um **simulador**, siga as instruções abaixo de acordo com seu sistema operacional:

#### Simulador para Android
- **Windows ou Mac**: Instale o [*Android Studio*](https://developer.android.com/studio?hl=pt-br) para emular dispositivos Android diretamente no seu computador.
- Para mais detalhes sobre a instalação, consulte a [documentação oficial do Expo para Android](https://docs.expo.dev/get-started/set-up-your-environment/).

#### Simulador para iOS
- **Mac**: Instale o [*Xcode*](https://apps.apple.com/us/app/xcode/id497799835) para emular dispositivos iOS.
- Mais informações sobre como configurar o ambiente iOS podem ser encontradas na [documentação do Expo para iOS](https://docs.expo.dev/get-started/set-up-your-environment/).

### 4. Links Úteis

Se preferir uma configuração diferente, você pode criar o projeto desejado seguindo as instruções nestas páginas:

- [Configuração inicial do Expo](https://docs.expo.dev/more/create-expo/#--template)
- [Configuração de ambiente para React Native](https://docs.expo.dev/get-started/set-up-your-environment/)

Esses links fornecem guias completos e atualizados para a configuração do seu projeto, tanto para o ambiente Expo quanto para a instalação de simuladores Android e iOS.

### 5. Estrutura do Projeto

Abaixo está a estrutura básica de diretórios do projeto **CLComm**. Ela foi projetada para organizar o código de forma eficiente e facilitar o desenvolvimento e a manutenção do aplicativo.

```bash
root
├── src/               # Pasta principal para os arquivos de configuração e código do aplicativo
│   ├── assets/        # Contém arquivos como imagens, fontes, e outros recursos estáticos
│   ├── components/    # Componentes reutilizáveis da aplicação (botões, layouts, etc.)
│   ├── pages/         # Páginas do aplicativo (login, home, perfil, etc.)
│   ├── global/        # Estilos, constantes e funções globais usadas em toda a aplicação
│   └── App.tsx        # Arquivo principal do aplicativo, onde ocorre o roteamento inicial
└── node_modules/      # Dependências instaladas pelo npm
```

### Detalhes Importantes

- **App.tsx**: Este é o arquivo principal onde a navegação do aplicativo é definida. O app inicia em uma tela de carregamento (loading) e, em seguida, redireciona o usuário para a tela de login.
- **assets**: É a pasta onde ficam armazenados arquivos estáticos como imagens, fontes, ícones, etc.
- **components**: Contém componentes reutilizáveis que podem ser usados em diferentes partes do app para manter o código mais organizado e modular.
- **pages**: Contém as páginas ou telas do aplicativo, como a tela de login, home, e outras.

Essa estrutura modular facilita a organização do código, tornando mais simples adicionar novas funcionalidades e gerenciar as existentes.


