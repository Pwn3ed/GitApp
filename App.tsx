import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBox from './src/components/SearchBox';
import User from './src/components/User';
import { useCallback, useState } from 'react';
import CardList from './src/components/CardList';
import Bio from './src/components/Bio';

export type Data = {
  avatar_url: string
  followers: string | number
  following: string | number
  login: string
  public_repos: string | number
  bio: string
}

export default function App() {

  const [data, setData] = useState<Data>()
  
  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please type something");
      return;
    }

    fetch(`https://api.github.com/users/${searchTerm}`).then(res => res.json()).then(data => {
      setData(data);
    })
  }, [])

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView className="h-screen p-4 mx-auto mt-5" >
        <Text className="text-purple-500 mx-auto text-lg">GitApp</Text>
        <SearchBox onSearch={ search }/>
        {
          data &&
          (<>
          <User src={ data?.avatar_url } username={ data?.login} bio={data.bio} />
          <CardList data={data} />
          </>)
        }
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
