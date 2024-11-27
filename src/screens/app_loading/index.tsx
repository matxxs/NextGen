// LoadingScreen.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { styles } from './styles';
import LogoApp from '../../assets/img/logo_app.png';
import LogoCompany from '../../assets/img/logo_company.png';

const FULL_TEXT = 'CL Comm';

export default function LoadingScreen({ navigation }: any) {
  const [revealedText, setRevealedText] = useState('C'); 
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const [isAnimating, setIsAnimating] = useState(true); 

  useEffect(() => {
    const opacityLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    opacityLoop.start();

    const revealLetters = setTimeout(() => {
      setIsAnimating(false);

      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const revealInterval = setInterval(() => {
        setRevealedText((prevText) => {
          if (prevText.length < FULL_TEXT.length) {
            return FULL_TEXT.slice(0, prevText.length + 1);
          } else {
            clearInterval(revealInterval);
            setTimeout(() => {
              navigation.replace('Login');
            }, 3000);
            return prevText;
          }
        });
      }, 300);
    }, 1000);

    return () => {
      clearTimeout(revealLetters);
      opacityLoop.stop();
    };
  }, [opacityAnim, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        {/* Imagem do App */}
      </View>

      <View style={styles.boxMid}>
        <Image source={LogoApp} />
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>C</Text>
          <Animated.Text style={[styles.logo, { opacity: isAnimating ? opacityAnim : 1 }]}>
            L
          </Animated.Text>
          <Text style={styles.logo}>{revealedText.slice(2)}</Text>
        </View>
      </View>

      <View style={styles.boxBottom}>
        <View style={styles.boxCompany}>
          <Image source={LogoCompany} style={styles.imgCompany} />
          <Text style={styles.textCompany}>NextGen</Text>
        </View>
      </View>
    </View>
  );
}