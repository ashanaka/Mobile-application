import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image animation={"bounceIn"}
                          duration={1500}
                          source={require("../../assets/logo.png")}
                          style={styles.logo}
                          resizeMode={"stretch"} />
      </View>
      <Animatable.View style={styles.footer}
                       animation={"fadeInUpBig"}>
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient colors={["#08d4c4", "#01ab9d"]}
                            style={styles.signIn}>
              <Text style={styles.textSign}>Get started</Text>
              <MaterialIcons name={"navigate-next"}
                             color={"#fff"}
                             size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 1,
    backgroundColor: "#009387",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold"
  },
  text: {
    color: "grey",
    marginTop: 5
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row"
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold"
  }
});
