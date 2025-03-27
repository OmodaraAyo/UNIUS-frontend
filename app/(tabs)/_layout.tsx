import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import homeIcon from "@/assets/images/unius.png";
import transactionIcon from "@/assets/images/transaction.png";
import earnIcon from "@/assets/images/earn.png";
import profileIcon from "@/assets/images/profile.png";
import settingsIcon from "@/assets/images/settings.png";


const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ title: "Home", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={homeIcon} style={{width: 24, height:24, tintColor: focused? '#0066CC': '#999999'}}/>
                ) }}
                 
            />
            <Tabs.Screen
                name="transaction"
                options={{ title: "Transaction", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={transactionIcon} style={{width: 24, height:26, tintColor: focused? '#0066CC': '#999999'}}/>
                )}}
            />
            <Tabs.Screen
                name="earn"
                options={{ title: "Earn", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={earnIcon} style={{width: 38, height:38, tintColor: focused? '#0066CC': '#999999'}}/>
                ) }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={profileIcon} style={{width: 24, height:26, tintColor: focused? '#0066CC': '#999999'}}/>
                ) }}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: "Settings", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={settingsIcon} style={{width: 24, height:26, tintColor: focused? '#0066CC': '#999999'}}/>
                )}}
            />
            
        </Tabs>
    );
};
export default Layout;

const styles = StyleSheet.create({});
