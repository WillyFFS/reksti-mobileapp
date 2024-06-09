import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> {navigation.navigate('news')}} style={{alignSelf:"flex-end"}}><Text>ini ganti icon bumi</Text></Pressable>
      <Text style={{alignSelf:"flex-start", fontSize:26}}>Danang's Aquarium</Text>
      <Image style={{width:150, height:150}} source={require("./assets/snack-icon.png")} />
      <Text style={{fontSize:16}}>Your aquarium condition is</Text>
      <Text style={{fontSize:40, color:"#7BC0FF"}}>Good</Text>
      <View style={{flexDirection: "row", gap: 15,justifyContent:"center", marginTop:15}}>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", marginVertical:15, gap: 15,justifyContent:"center"}}>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
        </View>
        <View style={styles.dataCard}>
          <View style={{width:20, height:20, backgroundColor:"#7BC0FF"}}></View>
          <Text style={{fontSize:12, marginBottom:4}}>28C</Text>
          <Text style={{fontSize:8}}>Temperature</Text>
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
