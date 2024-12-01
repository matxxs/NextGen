import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccffcc', // Fundo verde bem claro
        paddingHorizontal: 20, 
    },
    boxTop: {
        height: height / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: width * 0.09, 
        fontFamily: 'Roboto',
        color: themes.colors.title,
        fontWeight: 'bold',
        marginBottom: 20
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
    countryInputContainer: {
        width: '90%',
        height: height * 0.07,
        borderColor: themes.colors.border,
        borderWidth: 3,
        justifyContent: 'center',
    },
    modalSelector: {
        backgroundColor: '#f0f0f0', 
        borderWidth: 0,             
        padding: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
    },
    countryPickerText: {
        textAlign: 'center',
        fontSize: width * 0.05,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: themes.colors.text_active,
    },
    phoneInputContainer: {
        width: '90%',
        height: height * 0.07,
        borderColor: themes.colors.border,
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    regionalNumberContainer: {
        padding: 10,
        borderRightWidth: 3,
        borderRightColor: themes.colors.border,
    },
    regionalNumber: {
        fontSize: width * 0.05, 
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: themes.colors.text_active,
    },
    phoneInput: {
        flex: 1,
        fontSize: width * 0.05,
        fontFamily: 'Roboto',
        color: '#A6A6A6',
        textAlign: 'center',
    },
    boxBottom: {
        height: height / 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: width * 0.2, // Largura reduzida
        height: width * 0.3, // Altura aumentada (espessura)
        backgroundColor: themes.colors.bg_bnt_act,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    buttonIcon: {
        fontSize: 40,
        fontFamily: 'Roboto',
        color: '#FFFFFF'
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
