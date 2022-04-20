//react
import React from "react";
//native
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//redux
import { useSelector } from "react-redux";
//photo
import myPhoto from '../assets/myPhoto.png'
const UserView = () => {
  const user = useSelector((state) => state.user.user);

  const handlerLinkToGithub = () => {
    Linking.openURL(user.github);
  };

  const handlerLinkToLinkedin = () => {
    Linking.openURL(user.in);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={ myPhoto }
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.address}>Based in {user.address}</Text>
        <Text style={styles.email}>'{user.email}'</Text>
      </View>

      <View style={styles.logosContainer}>
        <AntDesign
          style={styles.logoLink}
          name="github"
          size={45}
          color="black"
          onPress={() => handlerLinkToGithub()}
        />
        <AntDesign
          style={styles.logoLink}
          name="linkedin-square"
          size={45}
          color="black"
          onPress={() => handlerLinkToLinkedin()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 83,
  },
  thumbnail: {
    width: 128,
    height: 128,
    borderRadius: 80
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
  },
  name: {
    fontFamily: "Comfortaa_Bolder",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000"
  },
  nickname: {
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000",
    marginTop: 15,
  },
  address: {
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 20,
    color: "#000000",
    marginTop: 24,
  },
  email: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 20,
    textDecorationLine: "underline",
    color: "#AD8B8B",
    marginTop: 28,
  },
  logosContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logoLink: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default UserView;
