import { Text, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-web'
import ContadorScreen from './02-ContadorScreen';
import BotonesScreen from './03-BotonesScreen';
import TextImputScreen from './04-TextImputScreen';
import ImageBackgroundScreen  from './05-ImageBackgroundScreen';
import ScrollViewScreen from './06-ScrollViewScreen';
import ScrollHorizontalViewScreen from './06-ScrollHorizontalViewScreen';
import ActivityIndicatorScreen from './07-ActivityIndicatorScreen'
import ListsScreen from './08-ListsScreen';
import ModalScreen from './09-ModalScreen';
import BottomSheetScreen from './10-BottomSheetScreen';
import Repaso1Screen from './11-Repaso1Screen';



export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textImput':
            return <TextImputScreen/>;
        case 'imageBackground':
            return <ImageBackgroundScreen/>;
        case 'scrollView':
            return <ScrollViewScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'lists':
            return <ListsScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomSheet':
            return <BottomSheetScreen/>
        case 'repaso1':
            return <Repaso1Screen/>
        case 'scrollHorizotnalView':
            return <ScrollHorizontalViewScreen/>
        case 'menu':

            default:
                  return (
                        <View>
                            <Text>Menu de prácticas</Text>
                            <Button onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                            <Button onPress={()=>setScreen('botones')} title='Pract: Botones'/>
                            <Button onPress={()=>setScreen('textImput')} title='Pract: Text Imput'/>
                            <Button onPress={()=>setScreen('imageBackground')} title='Pract: Image Background'/>
                            <Button onPress={()=>setScreen('scrollView')} title='Pract: Scroll View'/>
                            <Button onPress={()=>setScreen('scrollHorizotnalView')} title='Pract: Scroll Horizontal View'/>
                            <Button onPress={()=>setScreen('activityIndicator')} title='Pract: Activity Indicator'/>
                            <Button onPress={()=>setScreen('lists')} title='Pract: Lists'/>
                            <Button onPress={()=>setScreen('modal')} title='Pract: Modal'/>
                            <Button onPress={()=>setScreen('bottomSheet')} title='Pract: Bottom Sheet'/>
                            <Button onPress={()=>setScreen('repaso1')} title='Repaso1'/>
                        </View>
                        )
    }
  
  
}

const styles = StyleSheet.create({});