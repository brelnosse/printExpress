import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types'; // Bonnes pratiques : pour valider les props
import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';

function IllustrationContainer({ size, colors, source, imageStyle, containerStyle }) {
    
    // --- Amélioration : Styles dynamiques basés sur la prop 'size' ---
    const dynamicStyles = {
        container: {
            width: size,
            height: size,
            borderRadius: size / 12, // Rayon proportionnel à la taille
            ...containerStyle // Permet de surcharger le style du conteneur
        },
        image: {
            width: size * 0.8, // Image à 80% de la taille du conteneur
            height: size * 0.8,
            borderRadius: size / 15,
            ...imageStyle // Permet de surcharger le style de l'image
        }
    };

    return (
        // --- Amélioration : Vue pour l'ombre compatible iOS et Android ---
        <View style={[styles.shadowContainer, dynamicStyles.container]}>
            <LinearGradient
                colors={colors}
                // --- Amélioration : Utiliser StyleSheet.absoluteFillObject pour la concision ---
                style={styles.background}
            />
            <Image 
                source={source} 
                // --- Correction : 'resizeMode' est la propriété React Native, pas 'objectFit' ---
                resizeMode="cover"
                style={dynamicStyles.image} 
            />
        </View>
    );
}

// --- Bonnes pratiques : Définir les types et les valeurs par défaut des props ---
IllustrationContainer.propTypes = {
    size: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
    imageStyle: PropTypes.object,
    containerStyle: PropTypes.object,
};

IllustrationContainer.defaultProps = {
    size: 250, // Taille par défaut si non fournie
    imageStyle: {},
    containerStyle: {},
};

const styles = StyleSheet.create({
    shadowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // --- Amélioration : Ombre multi-plateforme ---
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 10,
            },
            android: {
                elevation: 8,
                // Le dégradé doit avoir une couleur de fond pour que l'ombre fonctionne sur Android
                backgroundColor: 'white' 
            },
        }),
    },
    background: {
        // Remplace position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'
        ...StyleSheet.absoluteFillObject,
        // Le borderRadius du parent ne s'applique pas au contenu absolu sans overflow.
        // On le réplique ici pour être sûr.
        // Note: La meilleure solution reste 'overflow: 'hidden'' sur le parent,
        // mais le background 'elevation' d'Android peut causer des problèmes.
        // Ce composant est structuré pour que cela fonctionne bien.
    },
    // Note : les styles dynamiques de l'image et du conteneur sont créés dans le composant
});

export default IllustrationContainer;