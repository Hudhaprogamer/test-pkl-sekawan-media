import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          Selamat Datang Di Profil {route.params.name}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./assets/aku.jpeg")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>Name: {route.params.name}</Text>
          <Text style={styles.description}>Email: Hudarahmadani@gmail.com</Text>
          <Text style={styles.description}>
            Alamat: JL Plaosan Timur 102/17
          </Text>
          <Text style={styles.description}>Phone Number: 0895320433255</Text>
        </View>
      </View>
      <View style={{ marginLeft: 15 }}>
        <Text>
          Nama saya Sya'ifudin Hudha Rachmadani,saya berdomisili Malang Jawa
          Timur,lahir pada 27 September 2006,saya sangat tertarik pada bidang
          Mobile Dev dan ingin mengembangkan
        </Text>
      </View>

      <Text style={{ margin: 7, alignSelf: "center" }}>PORTOFOLIO</Text>
      <View style={{ margin: 7, alignSelf: "centers" }}>
        <Image source={require("./assets/kapal.jpeg")} style={styles.image} />
        <Text>Game Pesawat Antariksa menggunakan construct</Text>
        <Image source={require("./assets/Brick.jpeg")} style={styles.image} />
        <Text>Brick Game menggunakan construct</Text>
        <Image
          source={require("./assets/age.png")}
          style={{ alignSelf: "center", width: "80%", marginTop: 8 }}
        />
        <Text>
          Aplikasi Android untuk menghitung jumlah umur dalam satuan menit
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontsize: 40,
  },
  titleArea: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF82",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 3,
    padding: 6,
  },
  image: {
    width: "95%",
    height: 600,
    resizeMode: "cover",
    margin: 10,
  },
  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
});
export default ProfileScreen;
