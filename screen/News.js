import { Text, View, StyleSheet, Pressable, Image, Linking } from 'react-native';
import axios from "axios";
import { useState, useEffect } from "react";


export default function News({navigation}) {
  const [news, setNews] = useState([]);

  async function getNews() {
    // dibawah ini adalah
    const response = await axios.get('https://newsapi.org/v2/everything?q=fish&apiKey=a3e47262b4244628bca6522058c3a451');
    // const response = newsData;
    const berita = [];
    const articles = response.data.articles;
    berita.push(articles[7], articles[1], articles[2]);
    console.log(berita);
    setNews(berita);
    console.log(berita);
  }

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <View style= {styles.container}>
      <View  style={{width: "100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30}}>
          <Pressable onPress={()=> {navigation.navigate('home')}}><Image style={{width:20, height:20}} source={require("../assets/panah.jpg")} /></Pressable>
          <Text style={{fontSize: 26}}>News</Text>
          <Image style={{width:20, height:20, opacity: 0}} source={require("../assets/panah.jpg")} />
        </View>
        {news.map((data, index) => (
        <>
        <Pressable onPress={() => handlePress(data.url)}>
          <View key={index} style={{width:"100%", flexDirection:"row", gap: 10, marginTop:16}}>
            <Image  style={{width:120, height:120}} source={require("../assets/ikan.jpg")} />
            <View style={{flexDirection:"column", width:"60%", justifyContent:"space-between"}}>
              <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:16}}>{data.title}</Text>
                <Text style={{fontSize:14, marginTop:16}}>Link To News</Text>
              </View>
              <Text style={{fontSize:12}}>{data.publishedAt}</Text>
            </View>
          </View>
        </Pressable>
        </>))}
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
