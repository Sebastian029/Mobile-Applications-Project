import * as React from "react";
import { StyleSheet, View, Text, Pressable,Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";
const AccountScreen = ({navigation}) => {
  return (
    <View style={[styles.account, styles.accountLayout]}>
      <View style={styles.headernormalHeader}>
        <View style={[styles.headernormalHeaderChild, styles.accountLayout]} />
        <Text style={styles.account1}>Account</Text>
        <View style={styles.headernormalHeaderItem} />
        <Image style={styles.systemIcon24pxmore} contentFit="cover" />
      </View>
      <View style={[styles.frameParent, styles.frameGroupLayout]}>
        <Pressable
          style={[styles.profileParent, styles.parentLayout]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profile}>Profile</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../../assets/Vector.png")}
            
          />
        </Pressable>
        <Pressable
          style={[styles.orderParent, styles.parentLayout]}
          onPress={() => navigation.navigate('Order')}
        >
          <Text style={[styles.order, styles.orderTypo]}>Order</Text>
          <Image
            style={[styles.iconParkOutlinetransaction1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/iconparkoutlinetransactionorder.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.paymentParent, styles.parentLayout]}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={[styles.payment, styles.orderTypo]}>{`Payment
`}</Text>
          <Image
            style={[styles.ioncardOutlineIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/ioncardoutline.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.addressWrapper, styles.parentLayout]}
        onPress={() => navigation.navigate('Address')}
      >
        <Text style={[styles.address, styles.orderTypo]}>{`Address
`}</Text>
 <Image
            style={[styles.ioncardOutlineIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/phaddressbook.png")}
          />
      </Pressable>
      <Pressable
        style={[styles.messageCenterParent, styles.parentLayout]}
        onPress={() => navigation.navigate('Message Center')}
      >
        <Text style={[styles.messageCenter, styles.orderTypo]}>
          Message center
        </Text>
        <Image
          style={[styles.mdimailboxOutlineIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/mdimailboxoutline.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.mySaleParent, styles.parentLayout]}
        onPress={() => navigation.navigate('My Sale')}
      >
        <Text style={[styles.mySale, styles.mySaleTypo]}>{`My Sale
`}</Text>
        <Image
          style={[styles.materialSymbolspointOfSaleIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/materialsymbolspointofsalerounded.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.claritydollarSolidParent, styles.parentLayout]}
        onPress={() => navigation.navigate('Sell Product')}
      >
        <Image
          style={[styles.claritydollarSolidIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/claritydollarsolid.png")}
        />
        <Text style={[styles.sellProduct, styles.mySaleTypo]}>
          Sell Product
        </Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  accountLayout: {
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  frameGroupLayout: {
    width: 390,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 60,
    borderWidth: 1,
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    borderStyle: "solid",
  },
  vectorIconLayout: {
    width: "5.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orderTypo: {
    lineHeight: 23,
    fontSize: FontSize.size_smi,
    height: 18,
    textAlign: "center",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconPosition: {
    left: 23,
    position: "absolute",
    overflow: "hidden",
  },
  mySaleTypo: {
    width: 92,
    lineHeight: 23,
    fontSize: FontSize.size_smi,
    height: 18,
    textAlign: "center",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  phaddressBookIcon1Layout: {
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  systemLayout: {
    bottom: "6.06%",
    top: "21.21%",
    width: "6.15%",
    height: "72.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    top: 36,
    position: "absolute",
  },
  lotsLayout: {
    height: 16,
    width: 66,
    fontSize: FontSize.size_3xs,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 1,
  },
  headernormalHeaderChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 26,
    position: "absolute",
  },
  account1: {
    top: "60.66%",
    left: "4.27%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  headernormalHeaderItem: {
    height: "0.82%",
    width: "100.27%",
    top: "99.59%",
    right: "-0.13%",
    bottom: "-0.41%",
    left: "-0.13%",
    borderTopWidth: 1,
    borderColor: Color.colorLavender,
    position: "absolute",
    borderStyle: "solid",
  },
  systemIcon24pxmore: {
    height: "19.67%",
    width: "6.4%",
    top: "57.38%",
    right: "4.27%",
    bottom: "22.95%",
    left: "89.33%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headernormalHeader: {
    left: 7,
    borderRadius: 20,
    width: 375,
    height: 122,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.colorGray,
    height: 20,
    textAlign: "center",
    top: 1,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  batteryIcon1: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon1: {
    width: 17,
    height: 12,
  },
  iconMobileSignal1: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    top: 1,
    left: "50%",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 91,
    width: 77,
    top: 19,
  },
  statusbarIphone13: {
    height: 47,
    left: 0,
    width: 390,
    top: 0,
    overflow: "hidden",
  },
  profile: {
    top: 24,
    left: 63,
    fontSize: 12,
    width: 57,
    height: 18,
    lineHeight: 18,
    textAlign: "center",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIcon2: {
    height: "33.33%",
    top: "38.33%",
    right: "89.49%",
    bottom: "28.33%",
    left: "5.38%",
  },
  profileParent: {
    borderColor: Color.colorLavender,
    top: 0,
  },
  order: {
    left: 64,
    width: 55,
    top: 21,
  },
  iconParkOutlinetransaction1: {
    left: 20,
    top: 18,
    position: "absolute",
    overflow: "hidden",
  },
  orderParent: {
    top: 60,
    borderColor: Color.colorLavender,
  },
  payment: {
    left: 50,
    width: 105,
    top: 21,
  },
  ioncardOutlineIcon1: {
    left: 21,
    top: 19,
    position: "absolute",
    overflow: "hidden",
  },
  paymentParent: {
    top: 120,
    borderColor: Color.colorLavender,
  },
  frameParent: {
    top: 144,
    height: 180,
    left: 0,
    width: 390,
  },
  address: {
    left: 52,
    width: 97,
    top: 21,
  },
  addressWrapper: {
    top: 324,
    borderColor: Color.colorLavender,
  },
  messageCenter: {
    left: 65,
    width: 126,
    top: 19,
  },
  mdimailboxOutlineIcon1: {
    top: 13,
    width: 30,
    height: 30,
  },
  messageCenterParent: {
    top: 384,
    borderColor: Color.colorLavender,
  },
  mySale: {
    left: 55,
    top: 21,
  },
  materialSymbolspointOfSaleIcon1: {
    height: 24,
    width: 24,
    top: 18,
  },
  mySaleParent: {
    top: 444,
    borderColor: Color.colorLavender,
  },
  claritydollarSolidIcon1: {
    top: 15,
    height: 24,
    width: 24,
  },
  sellProduct: {
    left: 66,
    top: 18,
  },
  claritydollarSolidParent: {
    top: 504,
    borderColor: Color.colorLavender,
  },
  iconamoonhome1: {
    top: 5,
    left: 35,
    position: "absolute",
    overflow: "hidden",
  },
  gameIconsperspectiveDiceSi1: {
    left: 260,
    top: 7,
  },
  vectorIcon3: {
    height: "60.61%",
    top: "30.3%",
    right: "8.46%",
    bottom: "9.09%",
    left: "86.41%",
  },
  systemIcon24pxsearch: {
    right: "65.64%",
    left: "28.21%",
  },
  systemIcon24pxcart: {
    right: "46.41%",
    left: "47.44%",
  },
  iconamoonhomeParent: {
    height: 33,
    top: 7,
    left: 0,
    width: 390,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  groupChild: {
    left: 0,
    width: 390,
    maxHeight: "100%",
    top: 0,
  },
  home1: {
    color: Color.sowa,
    fontFamily: FontFamily.poppinsRegular,
    width: 66,
    fontSize: FontSize.size_3xs,
  },
  home: {
    left: 14,
  },
  explore: {
    left: 88,
  },
  cart: {
    left: 164,
  },
  account2: {
    left: 313,
    color: Color.apkaGwnyKolor,
    width: 66,
    fontSize: FontSize.size_3xs,
    top: 36,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    position: "absolute",
  },
  lots: {
    left: 240,
    color: Color.sowa,
    fontFamily: FontFamily.poppinsRegular,
    width: 66,
    fontSize: FontSize.size_3xs,
    top: 36,
    position: "absolute",
  },
  frameGroup: {
    top: 773,
    left: 3,
    height: 52,
  },
  phaddressBookIcon1: {
    top: 339,
    left: 20,
  },
  account: {
    borderRadius: 45,
    borderColor: "#f5f5f5",
    borderWidth: 10,
    flex: 1,
    height: 864,
    overflow: "hidden",
    borderStyle: "solid",
  },
});

export default AccountScreen;
