import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1F7D1',  // Cor verde bem claro para o fundo
    paddingHorizontal: 20, 
  },
  boxTop: {
    height: height / 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: width * 0.09, 
    fontFamily: 'Roboto',
    color: themes.colors.title,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    padding: 10,
    maxWidth: width / 1.1,
    fontSize: width * 0.05, 
    color: themes.colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  boxMid: {
    height: height / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  // Estilização do container do campo de usuário
  userInputContainer: {
    width: '90%',
    height: height * 0.08,  // Aumentei um pouco a altura para mais conforto
    borderColor: themes.colors.border,
    borderWidth: 2,  // Borda mais fina
    borderRadius: 15,  // Borda mais arredondada
    justifyContent: 'center',
    paddingHorizontal: 15,  // Adicionando padding para aumentar o espaçamento interno
  },
  userInput: {
    fontSize: width * 0.05, 
    fontFamily: 'Roboto',
    color: themes.colors.text,
    textAlign: 'left',
  },
  // Estilização do container do campo de senha
  passwordInputContainer: {
    width: '90%',
    height: height * 0.08,  // Mesmo ajuste do campo de usuário
    borderColor: themes.colors.border,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  passwordInput: {
    fontSize: width * 0.05,
    fontFamily: 'Roboto',
    color: themes.colors.text,
    textAlign: 'left',
  },
  boxBottom: {
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilização do botão
  button: {
    width: width * 0.2,  // Botão um pouco menor
    height: width * 0.2,  // Ajustando a altura
    backgroundColor: themes.colors.bg_bnt_act,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,  // Borda mais arredondada
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonIcon: {
    fontSize: 35,  // Ícone do botão um pouco menor
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalList: {
    height: 300,
    width: '100%',
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalItemText: {
    fontSize: 16,
  },
});
