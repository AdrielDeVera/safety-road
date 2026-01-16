import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeNavProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [origin, setOrigin] = useState('Union Station');
  const [destination, setDestination] = useState('University of Toronto');

  const handleNavigate = () => {
    navigation.navigate('Routes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafeRoute Toronto</Text>
      <Text style={styles.subtitle}>Find the safest way across downtown.</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Where from?</Text>
        <TextInput
          style={styles.input}
          placeholder="Union Station"
          value={origin}
          onChangeText={setOrigin}
        />
        <Text style={[styles.label, { marginTop: 16 }]}>Where to?</Text>
        <TextInput
          style={styles.input}
          placeholder="University of Toronto"
          value={destination}
          onChangeText={setDestination}
        />
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Find Safe Routes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#475569',
  },
  form: {
    marginTop: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f8fafc',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HomeScreen;
