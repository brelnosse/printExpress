import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from './OnboardingScreen';
function App(){ 
    return (
        <SafeAreaView style={styles.container}>
            <OnboardingScreen />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})
export default App