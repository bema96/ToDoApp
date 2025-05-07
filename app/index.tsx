import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets/fonts/fonts';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingEntry}>
        <Text style={styles.loadingEntryText}>ToDo</Text>
         <Image source={require('@/assets/images/loadingIcon.png')}/>
      </View>
    );
  }
  


  return (
    <>
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Velkommen til ToDo-appen</Text>
    </View>
    </>
  );
}


const styles = StyleSheet.create({

  loadingEntry: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingEntryText: {
    fontSize: 60,
    color: colors.text,
    fontFamily: 'Monoton',
    position: 'absolute',
    top: '25%',
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

