import React, {useEffect, useRef, useState} from "react";
import {View, Text, Animated, StyleSheet, Dimensions, ImageBackground } from "react-native"
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const {height} = Dimensions.get("window");

export default function SplashScreenPro(){
  const [showMain, setShowMain] = useState(false);
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLog = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height/2)).current
  const fadeOut = useRef (new Animated.Value(1)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false
      }),
      Animated.spring(scaleLog, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(slideText,{
      toValue: 0,
      duration: 1000,
      delay: 800,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(async()=> {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
    }).start(async()=>{
        await SplashScreen.hideAsync();
        setShowMain(true);
    });
    }, 3000);

    return()=>clearTimeout(timer);
  },[]);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain){
    return(
      <ImageBackground
      source = {require('../assets/Captura de pantalla 2025-09-09 173207.png')}
      style = {styles.background}
      resizeMode = 'cover'
      >
        <View style={styles.content}>
          <Text style={styles.text}></Text>
        </View>
      </ImageBackground>
    )
  } 
  
  return (
    <Animated.View>
      <Animated.Image
      source = {'../assets/Captura de pantalla 2025-09-30 115213.png'}
      resizeMode={contain}
      style={[
        styles.logoImage,
         {
            opacity: fadeLogo,
            transform: [
              { scale: scaleLog}, 
              {rotate: rotateInterpolate}],
         },
      ]}
      ></Animated.Image>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo, // Aparece junto con el logo
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2], // Usa la animación del texto
                  outputRange: [0, -50],       // Se mueve un poco a la izquierda
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bffff", // fondo azul
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1, // ocupa toda la pantalla
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // caja semi-transparente
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
});


