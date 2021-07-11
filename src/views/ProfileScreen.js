import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from "react-native-paper";
import * as Colors from "../styles/abstracts/colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://picsum.photos/200/300?random=5"
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5
                }
              ]}>
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#006400" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Nugegoda, Colombo 05
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#006400" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+94-712345792</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#006400" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#008000",
              borderRightWidth: 1
            }
          ]}>
          <Title>0 / 8</Title>
          <Caption>Active Gig Orders</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>LKR 140.50</Title>
          <Caption>Pending Clearence</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {
        }}>
          <View style={styles.menuItem}>
            <Icon name="barley" color="#008000" size={25} />
            <Text style={styles.menuItemText}>My Gigs</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
        }}>
          <View style={styles.menuItem}>
            <Icon name="bank" color="#008000" size={25} />
            <Text style={styles.menuItemText}>Bank Details</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
        }}>
          <View style={styles.menuItem}>
            <Icon name="cart-arrow-down" color="#008000" size={25} />
            <Text style={styles.menuItemText}>My Orders</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
        }}>
          <View style={styles.menuItem}>
            <Icon name="cart-arrow-up" color="#008000" size={25} />
            <Text style={styles.menuItemText}>Gig Orders</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
        }}>
          <View style={styles.menuItem}>
            <Icon name="account-edit-outline" color="#008000" size={25} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500"
  },
  row: {
    flexDirection: "row",
    marginBottom: 10
  },
  infoBoxWrapper: {
    borderBottomColor: "#008000",
    borderBottomWidth: 1,
    borderTopColor: "#008000",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  menuWrapper: {
    marginTop: 10
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  menuItemText: {
    color: Colors.primary,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26
  },
  menuItemIcon: {
    color: Colors.secondary
  }
});
