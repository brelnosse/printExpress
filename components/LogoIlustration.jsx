import { Image, StyleSheet, View } from "react-native";

function LogoIllustration(){
    return (
        <View style={styles.pictureContainer}>
            <Image 
                source={require("../assets/images/delivery.jpg")}
                style = {styles.image}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    pictureContainer:{
        height: 100,
        width: 100,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        marginVertical: 20,
    },
    image :{
        height: 100,
        width: 100,
        borderRadius: 20,
        boxShadow: '0px 0px 16px 16px rgba(0,0,0,0.03)'
    }
})
export default LogoIllustration;