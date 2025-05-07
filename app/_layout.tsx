import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Layout() {
  return (

    <View style={styles.fullscreen}>
        <SafeAreaView style={styles.safeArea}>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }} />
        </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({

    fullscreen: {
        flex: 1,
        backgroundColor: '#bf46cf'
    },

    safeArea: {
        flex: 1,
    }
})