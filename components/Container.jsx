import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Container({children, color}){
    return (
            <SafeAreaView style={{flex: 1, backgroundColor: color}}>
        {/* <ScrollView contentContainerStyle={[styles.container, {backgroundColor: color, minHeight: '100%', width: '100%'}]}> */}
                <View style={[styles.container, {backgroundColor: color, minHeight: '100%'}]}>
                    {children}
                </View>
        {/* </Scroll:View> */}
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    }        
})