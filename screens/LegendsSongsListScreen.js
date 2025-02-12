import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LegendsongsList } from "../ScreenSongs/LegendsongsList";


const LegendsSongsListScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["rgba(189,0,138,0.49)", "#bd008a"]}
      style={{ flex: 1, paddingBottom: 20 }}
    >
      <View style={styles.firstView}>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.goBack()}>
          <Image source={require("../images/back-white.webp")} style={{ height: 50, width: 50, marginRight: 6 }} />
        </TouchableOpacity>
        <Text style={styles.medistories_cat}>
          Medistoris.cat
        </Text>
      </View>

      <View style={{ flexDirection: "row", paddingLeft: 20, marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 24, marginLeft: 0 }}>
          Llegendes immersives
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "90%",
          marginTop: 10,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      ></View>

      <FlatList
        data={LegendsongsList}
        style={{ paddingBottom: 50, flex: 1 }}
        scrollEnabled={true}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={<View style={{ height: 1 }}></View>}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('LegendsSongsPlayScreens', { selectedIndex: index })} style={styles.FirstTouchebleopacity} activeOpacity={1}>
              <View style={styles.firstView}>

                <View style={[styles.imageContainer, styles.shadowProp]}>
                  <Image source={item.artwork} style={styles.image} />
                </View>

                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: "white", fontSize: 16, width: "100%" }} adjustsFontSizeToFit={true} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <View style={styles.artistView}>
                    <Text style={styles.itemartist}> {item.artist}</Text>
                  </View>
                </View>

              </View>
            </TouchableOpacity>
          );
        }}
      />

    </LinearGradient>
  )
}

export default LegendsSongsListScreen

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    height: 100,
    paddingBottom: 3,
  },
  image: {
    aspectRatio: 1,
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0)",
    elevation: 2,
  },
  flag: {
    width: 20,
    height: 20,
    marginLeft: 5,
    borderRadius: 100,
  },
  title: {
    fontSize: 25,
    fontWidth: '700',
    color: '#EEEEEEE',
  },
  firstView: {
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 50 : 50,
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  itemartist: {
    color: "white",
    fontSize: 13,
    verticalAlign: "middle",
  },
  artistView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  FirstTouchebleopacity: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
  },
  medistories_cat:
  {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
    marginLeft: "20%",
    marginTop: 10,
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  }
})