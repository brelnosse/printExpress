import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';

function IllustrationContainer({colors, url}){
    return (
        <View style={styles.pictureContainer}>
            <LinearGradient
                colors={colors}
                style={styles.background}
            />
            <Image source={url} style={styles.picture} />
        </View>        
    );
}
const styles = StyleSheet.create({
    pictureContainer: {
        height: 250,
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'red',
        position: 'relative',
        overflow: 'hidden',
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0
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
    }
});
export default IllustrationContainer;