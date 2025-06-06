import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import IllustrationContainer from '../components/IllustrationContainer';

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

function OnboardingScreen(){  
    return (
        <Onboarding 
            titleStyles={{ color: '#000', fontSize: 30, fontWeight: 'bold', fontFamily: 'Comfortaa-Regular' }}
            subTitleStyles={{ color: '#000', fontSize: 20, marginTop: 10, textAlign: 'center', marginHorizontal: 10, fontWeight: '300', fontFamily: 'poppins-regular' }}
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
                    <IllustrationContainer 
                        colors={['#bcccfc', '#cdd9fe']}
                        url={require('../assets/images/files-uploading.png')}/>
                ),
                title: 'Importer vos documents',
                subtitle: 'Importer en toute simplicité vos documents depuis votre téléphone ou prenez une photo. Nous supportons la plupart des formats'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#3fbe7d'},
                image: (<IllustrationContainer 
                        colors={['#d7fae8', '#fafffc']}
                        url={require('../assets/images/printer.png')}/>),
                title: 'Personnalisez vos impressions',
                subtitle: 'Choisissez la taille papier, les options de couleur, le nombre de copies et plus. Obtenez exactement ce dont vous avez besoin.'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#ee64b9'},
                image: (<IllustrationContainer 
                        colors={['#fad2eb', '#efe7fc']}
                        url={require('../assets/images/delivery.jpg')}/>),
                title: 'Livraison rapide',
                subtitle: 'Vos impressions/photocopies sont livrées directement chez vous où au campus. Suivez votre commande en temps réel et recevez des mise à jour.'
            },
            {       
                backgroundColor: '#fff',
                titleStyles: {color: '#eb6606'},
                image: (<IllustrationContainer 
                        colors={['#fff5cf', '#ffe8d8']}
                        url={require('../assets/images/mobile-money.jpg')}/>),
                title: 'Paiement sécurisé',
                subtitle: 'Payez en toute sécurité via des options de paiement mobile. Vos informations sont protégées.'
            }
        ]}  
        />
    );   
}

export default OnboardingScreen