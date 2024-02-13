import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchContext } from '../../../App';

const SearchInput: React.FC = () => {

  const {  setSearchText } = useContext(searchContext) ?? {};;
  function handleChange(text:string) {
    setSearchText?.(text)
  }

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for books"
        placeholderTextColor="#000" 
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B4513',
    borderRadius: 50,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 56,
    color: 'black', 
    fontSize: 18,
  },
});

export default SearchInput;
