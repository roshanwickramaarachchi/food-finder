import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLIst from '../components/ResultsList';

const SearchScreen = () => {
  // const SearchScreen = ({navigation}) => {
  // console.log(props);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = price => {
    //price=== $ |$$ |$$$
    return results.filter(result => {
      return result.price === price;
    }); 
  };

  return (
    <>
      <SearchBar
        term={term}
        // onTermChange={newTerm => setTerm(newTerm)}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} // mehem denmm spase ekk nati wei  */}

      <ScrollView>
        <ResultsLIst
          results={filterResultByPrice('$')}
          title="Cost effective"
          // navigation={navigation} me vidiyat unth navigate krnn puluwn
        />
        <ResultsLIst
          results={filterResultByPrice('$$')}
          title="Bit pricier"
          // navigation={navigation}
        />
        <ResultsLIst
          results={filterResultByPrice('$$$')}
          title="Big splender"
          // navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
