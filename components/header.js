import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Sweet Todo </Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    paddingTop: 60,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
  }
});