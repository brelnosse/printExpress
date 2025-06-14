import { Link } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator, // Ajouté pour l'indicateur de chargement
    KeyboardAvoidingView, // Ajouté pour une meilleure gestion du clavier
    Platform,
    ScrollView, // Ajouté pour la compatibilité
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LogoIllustration from '../components/LogoIlustration';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';

function RegisterScreen() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError(null); // Réinitialiser l'erreur lors de la saisie
    };

    const handleLogin = () => {
        // Validation simple
        if (!formData.email || !formData.password) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        setIsLoading(true);
        setError(null);

        // Simuler un appel API
        setTimeout(() => {
            // createUserWithEmailAndPassword(getAuth(), 'jane.doe@example.com', 'SuperSecretPassword!')
            // .then(() => {
            //     console.log('User account created & signed in!');
            // })
            // .catch(error => {
            //     if (error.code === 'auth/email-already-in-use') {
            //     console.log('That email address is already in use!');
            //     }

            //     if (error.code === 'auth/invalid-email') {
            //     console.log('That email address is invalid!');
            //     }

            //     console.error(error);
            // });
            // Si la connexion échoue:
            // setError("Email ou mot de passe incorrect.");
            setIsLoading(false);
        }, 2000);
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView style={styles.innerContainer} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <LogoIllustration />
                <Text style={styles.title}>Insciprition</Text>
                
                {error && <Text style={styles.errorText}>{error}</Text>}

                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nom</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Kamdoum"
                            placeholderTextColor={COLORS.grey}
                            onChangeText={val => handleInputChange('email', val)}
                            value={formData.email}
                            keyboardType="text"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Prénom</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Jessica"
                            placeholderTextColor={COLORS.grey}
                            onChangeText={val => handleInputChange('email', val)}
                            value={formData.email}
                            keyboardType="text"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Adresse e-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="example@domaine.com"
                            placeholderTextColor={COLORS.grey}
                            onChangeText={val => handleInputChange('email', val)}
                            value={formData.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Numéro de téléphone</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="676 14 43 52"
                            placeholderTextColor={COLORS.grey}
                            onChangeText={val => handleInputChange('email', val)}
                            value={formData.email}
                            keyboardType="phone"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Mot de passe</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput 
                                style={styles.passwordInput}
                                placeholder="Entrez votre mot de passe"
                                placeholderTextColor={COLORS.grey}
                                onChangeText={val => handleInputChange('password', val)}
                                value={formData.password}
                                secureTextEntry={!isPasswordVisible}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Icon name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={24} color={COLORS.grey} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} disabled={isLoading}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color={COLORS.white} />
                        ) : (
                            <Text style={styles.primaryButtonText}><Icon name={"person-circle-outline"} size={20} /> S&apos;inscrire</Text>
                        )}
                    </TouchableOpacity>

                    <Text style={styles.linkText}>J&apos;ai déjà un compte ? <Link href={'/LoginScreen'} style={{color: COLORS.primary}}>Se connecter</Link></Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 30
    },
    title: {
        fontSize: 34,
        fontFamily: FONTS.bold,
        color: COLORS.primary,
        marginBottom: 20,
        textAlign: 'center',
    },
    form: {
        width: '100%',
    },
    formGroup: {
        // marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.primary,
        marginVertical: 10,
    },
    input: {
        height: 50,
        paddingHorizontal: 15,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 15,
        color: COLORS.black,
        fontFamily: FONTS.regular,
        paddingLeft: 20,
        backgroundColor: '#f2f2f2', // Couleur de fond pour l'input

    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        paddingLeft: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f2f2f2', // Couleur de fond pour l'input

    },
    passwordInput: {
        flex: 1,
        fontSize: 15,
        color: COLORS.black,
        fontFamily: FONTS.regular,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 2, // Ombre pour Android
    },
    primaryButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: FONTS.bold,
        textAlign: 'center',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.lightGrey,
    },
    separatorText: {
        marginHorizontal: 10,
        color: COLORS.grey,
        fontFamily: FONTS.regular,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        borderColor: COLORS.googleBlue,
        borderWidth: 1,
    },
    googleIcon: {
        width: 22,
        height: 22,
        marginRight: 12,
    },
    googleButtonText: {
        color: COLORS.googleBlue,
        fontSize: 16,
        fontFamily: FONTS.bold,
    },
    errorText: {
        color: COLORS.error,
        fontFamily: FONTS.regular,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: COLORS.backgroundError,
        padding: 10,
        borderRadius: 8,
    },
    linkText: {
        textAlign: 'center',
        paddingVertical: '20',
        fontSize: 16,
        fontFamily: FONTS.regular,
        marginBottom: 30
    }
});

export default RegisterScreen;