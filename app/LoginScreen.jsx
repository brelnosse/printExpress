import { useState } from 'react';
import {
  ActivityIndicator,
  Image, // Ajouté pour l'indicateur de chargement
  KeyboardAvoidingView, // Ajouté pour une meilleure gestion du clavier
  Platform // Ajouté pour la compatibilité
  ,

  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoIllustration from '../components/LogoIlustration';

// --- Bonnes pratiques : Créer des constantes pour les couleurs et les polices ---
const COLORS = {
    primary: '#f40899',
    white: '#fff',
    black: '#000',
    grey: '#888',
    lightGrey: '#eee',
    googleBlue: '#0671eb',
    error: '#ff3333'
};

const FONTS = {
    regular: 'poppins-regular',
    bold: 'poppins-bold'
};


function LoginScreen() {
    // --- Amélioration : Utiliser un seul objet pour les données du formulaire ---
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // --- Amélioration : Fonction pour gérer les changements de texte ---
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
            console.log("Données de connexion:", formData);
            // Ici, vous mettriez votre logique de connexion (ex: appel à une API)
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
            <View style={styles.innerContainer}>
                <LogoIllustration />
                <Text style={styles.title}>Connexion</Text>
                
                {error && <Text style={styles.errorText}>{error}</Text>}

                <View style={styles.form}>
                    {/* Champ Email/Nom d'utilisateur */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nom d'utilisateur ou E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Entrez votre nom d'utilisateur ou e-mail"
                            placeholderTextColor={COLORS.grey}
                            onChangeText={val => handleInputChange('email', val)}
                            value={formData.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Champ Mot de passe */}
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
                            <Text style={styles.primaryButtonText}><Icon name={"log-in-outline"} size={20} /> Se connecter</Text>
                        )}
                    </TouchableOpacity>

                    {/* Séparateur */}
                    <View style={styles.separatorContainer}>
                        <View style={styles.line} />
                        <Text style={styles.separatorText}>ou</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Connexion Sociale */}
                    <TouchableOpacity style={styles.googleButton}>
                        <Image source={require('../assets/images/logo-google.png')} style={styles.googleIcon} />
                        <Text style={styles.googleButtonText}>Continuer avec Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

// --- Amélioration : Styles mieux organisés et plus propres ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 34,
        fontFamily: FONTS.bold,
        color: COLORS.primary,
        marginBottom: 20,
    },
    form: {
        width: '100%',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.primary,
        marginBottom: 8,
    },
    input: {
        height: 50,
        paddingHorizontal: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 15,
        fontFamily: FONTS.regular,
        backgroundColor: COLORS.white,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 15,
    },
    passwordInput: {
        flex: 1,
        fontSize: 15,
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
    }
});

export default LoginScreen;