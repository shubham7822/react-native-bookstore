import 'tailwind-rn';
import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/views/Home';

interface ContextType {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const searchContext = createContext<ContextType | undefined>(undefined);


export default function App() {
  
  const [searchText, setSearchText] = useState<string>('');


  return (
    <searchContext.Provider value={{ searchText, setSearchText }}>
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
    </searchContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    backgroundColor: '#D2B48C',
  },
});
