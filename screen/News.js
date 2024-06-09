import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export default function News({navigation}) {
  return (
    <View style= {styles.container}>
      <View style={{width: "100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30}}>
        <Pressable onPress={()=> {navigation.navigate('home')}}><Image style={{width:20, height:20}} source={require("./assets/panah.jpg")} /></Pressable>
        <Text style={{fontSize: 26}}>News</Text>
        <Image style={{width:20, height:20, opacity: 0}} source={require("./assets/panah.jpg")} />
      </View>
      <View style={{width:"100%", flexDirection:"row", gap: 10}}>
      <Image  style={{width:120, height:120}} source={require("./assets/ikan.jpg")} />
      <View style={{flexDirection:"column", width:"60%", justifyContent:"space-between"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:12}}>Education</Text>
          <Text style={{fontSize:14}}>Copperband Butterflyfish Successfully Captive Bred by Rising Tide</Text>
        </View>
        <Text style={{fontSize:12}}>4 April 2023</Text>
      </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: "column",
    alignItems : "center",
    paddingTop: 60,
    paddingBottom:20,
    paddingHorizontal: 30,
  }
})
