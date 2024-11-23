import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes"

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors.bgScreen,
        paddingHorizontal: 20, 
      },
      boxTop:{
        height: height / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      boxMid:{
        height: height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      },
      logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
      },
      boxBottom:{
        height: height / 3,
        flexDirection: 'row',         
        justifyContent: 'center',     
        alignItems: 'flex-end',    
        
      },
      boxCompany: {
        flexDirection: 'row', 
        justifyContent: 'center',  
        alignItems: 'center',
        gap: 10,
      },
      imgCompany: {
        width: 56,
        height: 56,
      },
      textCompany: {
        fontSize: width * 0.06,  
        fontWeight: 'bold'              
      }
});