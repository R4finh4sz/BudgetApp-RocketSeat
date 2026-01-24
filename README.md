📱 Budget Manager App

Aplicativo mobile para criação, gerenciamento e
compartilhamento de orçamentos, desenvolvido em
React Native com Expo.

✨ Funcionalidades

- Criar orçamentos
- Editar informações gerais
- Adicionar serviços
- Definir valor e quantidade
- Cálculo automático de subtotal e total
- Aplicação de desconto
- Visualização detalhada do orçamento
- Duplicar orçamento
- Excluir orçamento
- Compartilhar orçamento
- Persistência local
- Layout moderno e responsivo

🧱 Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- AsyncStorage
- React Native Keyboard Controller
- React Native Mask Input
- Lucide React Native
- Phosphor Icons
- Zod
- Safe Area Context

🚀 Instalação

1. Clonar o repositório

git clone https://github.com/R4finh4sz/BudgetApp-RocketSeat.git

---

2. Instalar dependências

npm install
ou
yarn install

---

3. Instalar dependências nativas

npx expo install

---

4. Executar o projeto

npx expo start

📦 Dependências principais

npx expo install \
@react-native-async-storage/async-storage \
react-native-safe-area-context \
react-native-keyboard-controller \
react-native-mask-input \
lucide-react-native \
phosphor-react-native

💰 Tratamento de valores monetários

Formato brasileiro:

R$ 1.234,56

Conversão interna:

"R$ 1.234,56" → 1234.56

Função responsável:

parseBRLCurrencyToNumber()

📤 Compartilhamento

Utiliza API nativa:

import { Share } from 'react-native';

Não requer instalação adicional.

🧪 Validações

- Campos obrigatórios
- Valor maior que zero
- Quantidade mínima de 1
- Validação com Zod
- Alertas e feedback visual

🔐 Persistência

Armazenamento local via AsyncStorage

Chave utilizada:

@budgets

📌 Próximas melhorias

- Edição completa de orçamento
- Exportação em PDF
- Compartilhamento em PDF
- Integração com backend
- Autenticação
- Tema escuro

🧑‍💻 Autor

Rafael Souza Santana

GitHub:
https://github.com/R4finh4sz

LinkedIn:
https://linkedin.com/in/R4finh4sz

📄 Licença

MIT License

<p align="center">
  <img src="./Images/Image1.png" width="220" />
  <img src="./Images/Image2.png" width="220" />
  <img src="./Images/Image3.png" width="220" />
  <img src="./Images/Image4.png" width="220" />
</p>
