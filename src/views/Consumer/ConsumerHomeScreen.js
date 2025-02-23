import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const ConsumerHeader = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.toggleDrawer()}
      />
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
};

const ConsumerGig = () => {
  return (
    <Card style={ConsumerGigStyle.gridItem}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    </Card>
  );
};

const ConsumerGigStyle = StyleSheet.create({
  gridItem: {
    width: 190,
    // margin:5,
    // padding:5,
    // height:150,
  },
});

const ConsumerGigs = () => {
  return (
    <View style={ConsumerGigsStyle.grid}>
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
    </View>
  );
};

const ConsumerGigsStyle = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const ConsumerHomeScreen = ({navigation}) => {
  return (
    <>
      <ConsumerHeader  navigation={navigation} />
      <ScrollView>
        <ConsumerContent />
      </ScrollView>
    </>
  );
};

const ConsumerContent = () => {
  return (
    <View style={style.container}>
      <ConsumerGigs />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export {ConsumerHomeScreen, ConsumerHeader};