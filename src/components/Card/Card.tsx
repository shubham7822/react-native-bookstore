import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { BookItem  } from '../../constants/types';

interface CardProps {
  item: BookItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.card}>
      <Image
                style={styles.image}
                source={{ uri: item?.coverImg }}
            />
      <View style={styles.content}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.publishedYr}</Text>
        <Text style={styles.author}>Author: {item?.author}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setClicked(!clicked)}
      >
        <Text style={styles.buttonText}>{clicked ? "Read" :"un Read"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginTop:20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#654321',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image:{
    width:80,
    height:40,
    transform: [{ rotate: '90deg' }]
  }
});

export default Card;
