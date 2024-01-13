import { Button, Text, View, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
  ];
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button
          style={styles.menuItem}
          title="Go to my profile"
          onPress={() => navigation.navigate("Profile", { name: "Hudha" })}
        />
        <Button
          style={styles.menuItem}
          title="Go to my customer's list"
          onPress={() => navigation.navigate("CustomerList")}
        ></Button>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./assets/background.jpeg")}
          style={{ alignSelf:"center" }}
        />
      </View>
      <View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  menu: {
    flex: 5,
    // padding: 3,
  },
  menuItem: {
    borderWidth: 3,
    borderColor: "#cccccc",
    height: 100,
    // padding: 8,
  },

});

export default HomeScreen;
