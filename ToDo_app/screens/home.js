import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    { title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '4' },
    { title: 'Not So "Final" Fantasy', rating: 1, body: 'lorem ipsum', key: '6' },
    { title: 'Not So "Final" Fantasy', rating: 4, body: 'lorem ipsum', key: '5' },
  ]);

  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>

        <View style={styless.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styless.modalToggle, ...styless.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <Text>
            Hello
          </Text>
        </View>

      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styless.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styless = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'

  },
  modalClose: {
    marginTop: 20,
    marginBottom: 20
  },
  modalContent: {
    flex: 1,

  }

})