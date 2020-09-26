import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar, TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import TopImageSlider from './Components/ImageSlider';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content" />
      <View style={styles.mainView}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Icon name='chevron-back' size={25} /></TouchableOpacity>
          <Text style={{ color: '#3BCEBE', fontWeight: 'bold' }}>View all plans</Text>
        </View>
        <TopImageSlider />
        <View>
          <View style={[styles.row, { marginTop: '5%' }]}>
            <Text style={styles.sectionTitle}>Trueno Bolt</Text>
            <View style={styles.row}>
              <Text style={[styles.sectionTitle, { color: '#3BCEBE' }]}>
                Rs 4500 </Text>
              <Text style={styles.sectionDescription}>
                / month</Text>
            </View>
          </View>
          <Text style={styles.sectionDescription}>
            Electric vehicle</Text>
        </View>
        <Text style={[styles.sectionDescription, { marginVertical: '5%' }]}>
          If you want to travel, running errands or have some fun, Trueno Bolt is the most perfect. Light, smart and affordable!
         </Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.sectionDescription}>
              Range{'\n'}<Text style={{ fontWeight: 'bold' }}>50mil</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.sectionDescription}>
              Speed{'\n'}<Text style={{ fontWeight: 'bold' }}>50kph</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.sectionDescription}>
              Total Distance{'\n'}<Text style={{ fontWeight: 'bold' }}>500kms</Text>
            </Text>
          </View>
        </View>
        <Text style={[styles.sectionDescription, { marginVertical: '10%' }]}>
          <Text style={{ fontWeight: 'bold' }}>*500 kms </Text>complimentary{'\n'}
         (Post 500 kms,<Text style={{ fontWeight: 'bold' }}> Rs 7/km</Text>)</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Rent this EV</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
  },
  button: {
    width: '40%',
    backgroundColor: '#3BCEBE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20
  },
});   

export default App;
