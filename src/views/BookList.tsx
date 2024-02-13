import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card/Card';
import { API_URL } from '../constants/appConstants';
import { getApiCall } from '../service/service';
import { Book } from '../constants/types';
import { searchContext } from '../../App';


const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading,setLoading] = useState<boolean>(false)
  const {  searchText = ""} = useContext(searchContext) ?? {};;

  async function getBookData() {
    try {
      setLoading(true)
      const data = await getApiCall(API_URL); 
      const {reading_log_entries} =  data
      const dataArr =  Array.isArray(reading_log_entries) ? reading_log_entries?.slice(0,21) :[]
      const formatedData: Book[] = dataArr?.map((book,idx) => {
        const {work } = book
        return {
            title:work?.title,
            author:work?.author_names.join(", "),
            publishedYr:work?.first_publish_year,
            coverImg:`https://covers.openlibrary.org/b/id/${work?.cover_id}-M.jpg`
        }
      })

      setBooks([...formatedData])
    } catch (error) {
      console.error('something went wrong', error);
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getBookData();
  }, [])
  
  const renderABook = ({ item }: { item: Book }) => <Card item={item} />;
  

  return (
    <>  
    {loading ? <Text style={styles?.loadText}>Loading...</Text>  :
    <FlatList
      data={books?.filter(book =>
        book?.title.toLowerCase().includes(searchText.toLowerCase())
      )}
      renderItem={renderABook}
      keyExtractor={(item) => item.coverImg}
      contentContainerStyle={styles.container}
    />
      }
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
  loadText: {
    textAlign:"center",
    padding:40,
    fontSize:16,
    fontStyle: 'italic'
  }
});

export default BookList;
