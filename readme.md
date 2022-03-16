Como iniciar um projeto:

-> react-native init nomeDoProjeto
-> cd nomeDoProjeto
-> criar pasta src, dentro dela as pastas components, styles e images.
-> dentro da pasta android criar o aqruivo "local.properties" e acrescentar "C:\\Users\\sheldora\\AppData\\Local\\Android\\sdk"

Projeto com SQLite:
-> npm install react-native-sqlite-storage --save
-> habilitar promises (é tipo um try catch): 
-> criar a pasta src, dentro dela as pastas DataBase e "Models"
-> dentro de DataBase criar o arquivo "ItemDataBase" e adicionar as configurações iniciais (olhar no arquivo)

Projeto com telas (navigation):
-> npm install @react-navigation/native
-> npm install react-native-screens react-native-safe-area-context


-> Stack: npm install @react-navigation/stack
-> Bottom Tabs: npm install @react-navigation/bottom-tabs

-> Drawer: npm install @react-navigation/drawer
-> adicionar no package.jason, nas dependências, "react-native-reanimated":"2.2.4" e depois digite o comando "npm install" para instalar essa dependência.

Projeto com Icons:
-> npm install --save react-native-vector-icons
-> react-native link 