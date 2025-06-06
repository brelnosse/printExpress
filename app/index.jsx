import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function App(){ 
    const Next = ({ isLight, ...props}) => (
    <TouchableOpacity {...props}>
        <Text style={{backgroundColor: '#f40899',padding: 10, marginHorizontal: 10, fontSize: 17, paddingHorizontal: 20, borderRadius: 5, color: 'white'}}>Suivant <Icon name="chevron-forward" size={20} color="white" /></Text>
    </TouchableOpacity>
    );
    const Skip = ({ isLight, ...props }) => (
        <Link href="/LoginScreen" style={{backgroundColor: 'transparent',padding: 10, marginHorizontal: 10, fontSize: 17, paddingHorizontal: 20, borderRadius: 5, color: '#f40899'}} {...props}>Passer</Link>
    );
    const Done = ({ isLight,  ...props }) => (
        <Link href="/LoginScreen" style={{backgroundColor: '#f40899',padding: 10, marginHorizontal: 10, fontSize: 17, paddingHorizontal: 20, borderRadius: 5, color: 'white'}} {...props}>Passer</Link>
    );    

    return (
        <SafeAreaView style={styles.container}>
        <Onboarding 
            titleStyles={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}
            subTitleStyles={{ color: '#000', fontSize: 20, marginTop: 10, textAlign: 'center', marginHorizontal: 10, fontWeight: '300' }}
            bottomBarColor="#fff"
            NextButtonComponent = {Next}
            SkipButtonComponent = {Skip}
            DoneButtonComponent = {Done}
            showDone={true}
            bottomBarHeight = {80}
            bottomBarHighlight = {false}
            showPagination = {true}
            pages={[
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#517af5'},
                image: (
                <View style={styles.pictureContainer}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#bcccfc', '#cdd9fe']}
                        style={styles.background}
                    />
                    <Image source={require('../assets/images/files-uploading.png')} style={styles.picture} />
                </View>
                ),
                // #d8fbe9
                title: 'Importer vos documents',
                subtitle: 'Importer en toute simplicité vos documents depuis votre téléphone ou prenez une photo. Nous supportons la plupart des formats'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#3fbe7d'},
                image: (
                <View style={styles.pictureContainer}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#d7fae8', '#fafffc']}
                        style={styles.background}
                    />
                    <Image source={require('../assets/images/printer.png')} style={styles.picture} />
                </View>
                ),
                title: 'Personnalisez vos impressions',
                subtitle: 'Choisissez la taille papier, les options de couleur, le nombre de copies et plus. Obtenez exactement ce dont vous avez besoin.'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#ee64b9'},
                image: (
                <View style={styles.pictureContainer}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#fad2eb', '#efe7fc']}
                        style={styles.background}
                    />
                    <Image source={require('../assets/images/delivery.jpg')} style={styles.picture} />
                </View>
                ),
                title: 'Livraison rapide',
                subtitle: 'Vos impressions/photocopies sont livrées directement chez vous où au campus. Suivez votre commande en temps réel et recevez des mise à jour.'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#eb6606'},
                image: (
                <View style={styles.pictureContainer}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#fff5cf', '#ffe8d8']}
                        style={styles.background}
                    />
                    <Image source={require('../assets/images/mobile-money.jpg')} style={styles.picture} />
                </View>
                ),
                title: 'Paiement sécurisé',
                subtitle: 'Payez en toute sécurité via des options de paiement mobile. Vos informations sont protégées.'
            }
        ]}  
        />
        </SafeAreaView>
    );   
}
const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    pictureContainer: {
        height: 250,
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'red',
        position: 'relative',
        overflow: 'hidden'
    },
    picture: {
        height: 200,
        width: 200,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        objectFit: 'cover'
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0
    }
})
export default App