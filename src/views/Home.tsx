import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchInput from '../components/Search/SearchInput';
import Card from '../components/Card/Card';
import BookList from './BookList';

const HomeScreen: React.FC = () => {
  
  return (
    <View style={styles.container}>
       <SearchInput/>
       <BookList/> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }
  });
  
  export default HomeScreen;