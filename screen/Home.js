import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { ref,set, onValue} from "firebase/database";
import db from "../../FirebaseConfig"

export default function Home({navigation}) {
  async function readDataTemperature() {
    const databaseRef = ref(db, "test/temperature");
    onValue(databaseRef, (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setTemperature(snapshot.val());
      } else {
        setTemperature(0);
      }
    });
  }
  const handleFeed = ()=>{
    const databaseRef = ref(db,'test/Feed');
    set(databaseRef, true)
    .then(() => {
    console.log("Feed Now triggered. Setting to true.");
    // Revert to false after 5 seconds
    setTimeout(() => {
        set(databaseRef, false)
        .then(() => {
          console.log("Reverted feed to false.");
        })
        .catch((error) => {
          console.error("Error reverting feed to false:", error);
        });
    }, 10000);
  })
  .catch((error) => {
    console.error("Error setting feed to true:", error);
  });            
}
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> {navigation.navigate('news')}} style={{alignSelf:"flex-end"}}><Text>ini ganti icon bumi</Text></Pressable>
      <Text style={{alignSelf:"flex-start", fontSize:26}}>Danang's Aquarium</Text>
      <Image style={{width:150, height:150}} source={require("../assets/ikan.jpg")} />
      <Text style={{fontSize:16}}>Your aquarium condition is</Text>
      <Text style={{fontSize:40, color:"#7BC0FF"}}>Good</Text>
      <View style={{flexDirection: "row", gap: 15,justifyContent:"center", marginTop:15}}>
        <View style={styles.dataCard}>
          <Image source={require("../assets/suhu.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>28°C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
        <View style={styles.dataCard}>
          <Image source={require("../assets/ph.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>6.8</Text>
          <Text style={{fontSize:8}}>pH</Text>
        </View>
        <View style={styles.dataCard}>
          <Image source={require("../assets/kadaroksigen.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>0.2 NTU</Text>
          <Text style={{fontSize:8}}>Turbidity</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", marginVertical:15, gap: 15,justifyContent:"center"}}>
        <View style={styles.dataCard}>
          <Image source={require("../assets/o2.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>6.3 mg/L</Text>
          <Text style={{fontSize:8}}>Dissolved Oxygen</Text>
        </View>
        <View style={styles.dataCard}>
          <Image source={require("../assets/atom.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>+276 mV</Text>
          <Text style={{fontSize:8}}>Oxidation-Reduction</Text>
        </View>
        <View style={styles.dataCard}>
          <Image source={require("../assets/aaa.jpg")} style={{width:20, height:20}} />
          <Text style={{fontSize:12, marginBottom:4}}>0.03 ppm</Text>
          <Text style={{fontSize:8}}>Ammonia</Text>
        </View>
      </View>
      <Pressable style={styles.button}><Text style={{textAlign:"center", color:"white"}}>Feed Now</Text></Pressable>
      <View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
        <Text style={{fontSize:12}}>Countdown to the next mealtime:</Text>
        <Text style={{fontSize:12}}>04 : 25 : 39</Text>
      </View>
      <Pressable><Text style={{fontSize:12, color:"#7BC0FF", textDecorationLine:"underline"}}>Set Schedule</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems : "center",
    paddingTop: 80,
    paddingBottom:20,
    paddingHorizontal: 30,
    justifyContent:"space-between"
  },
  dataCard : {
    flex: 1,
    flexDirection:"column",
    alignItems:"center",
    borderRadius: 16,
    padding: 6,
    paddingHorizontal: 14,
    elevation:5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    backgroundColor:"white"
  },
  button : {
    width:"100%",
    padding:20,
    borderRadius: 12,
    elevation:5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    backgroundColor: "#7BC0FF",
  }
});
