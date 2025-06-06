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
        height: 200,
        width: 200,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image :{
        height: 200,
        width: 200,
        borderRadius: 20,
        boxShadow: '0px 0px 16px 16px rgba(0,0,0,0.03s)'
    }
})
export default LogoIllustration;