import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;
import Calculator from './pages/Calculator';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Calculator,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <NavigationContainer>
        <PaperProvider>   
      <Stack.Navigator initialRouteName="Home"   screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Calculator} options={{ title: 'Lumi Math' }} />
        <Stack.Screen name="Details" component={HomeScreen} />
      </Stack.Navigator>
      </PaperProvider>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
