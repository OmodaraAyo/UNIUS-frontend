import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import homeIcon from "@/assets/images/unius.png";
import transactionIcon from "@/assets/images/transaction.png";
import earnIcon from "@/assets/images/earn.png";
// import trendingIcon from "@/assets/images/Trending.png";
import settingsIcon from "@/assets/images/settings.png";


const baseTabStyles ={
    label: {
        fontSize: 13,
    }
}

const Layout = () => {
    const {width} = useWindowDimensions();
    const isMediumScreen = width >= 768;
    return (
        <Tabs screenOptions={{tabBarStyle: {height:90, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: {width: 0, height:-4}, shadowOpacity: 0.1, shadowRadius: 6, elevation:10, flexDirection: isMediumScreen ? 'row': 'row'},
            tabBarItemStyle: {
                paddingVertical: 24,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            tabBarLabelStyle: baseTabStyles.label,
        }}>
            <Tabs.Screen
                name="index"
                options={{ title: "Home", headerShown: false, tabBarIcon: ({focused}) => (
                    <View style= {styles.tabContainer}><Image source={homeIcon} style={{width: 24, height:26, tintColor: focused? '#0066CC': '#999999'}}/> <Text style={{color: focused ? '#0066CC' : '#999999',fontSize: 12}}>Home</Text></View>
                ), 
                tabBarLabel: () => null}}
            />
            <Tabs.Screen
                name="transaction"
                options={{ title: "Transaction", headerShown: false, tabBarIcon: ({focused}) => (
                    <View style= {styles.tabContainer}><Image source={transactionIcon} style={{width: 29, height:26, tintColor: focused? '#0066CC': '#999999'}}/> <Text style={{color: focused ? '#0066CC' : '#999999',fontSize: 12}}>Transaction</Text></View>
                ), 
                tabBarLabel: () => null}}
            />
            <Tabs.Screen
                name="earn"
                options={{ title: "Earn", headerShown: false, tabBarIcon: ({focused}) => (
                    <View style= {styles.tabContainer}><Image source={earnIcon} style={{width: 29, height:26, tintColor: focused? '#0066CC': '#999999'}}/> <Text style={{color: focused ? '#0066CC' : '#999999',fontSize: 12,}}>Earn</Text></View>
                ), 
                tabBarLabel: () => null}}
            />
            {/* <Tabs.Screen
                name="trending"
                options={{ title: "Trending", headerShown: false, tabBarIcon: ({focused}) => (
                    <Image source={trendingIcon} style={{width: 24, height:26, tintColor: focused? '#0066CC': '#999999'}}/>
                ) }}
            /> */}
            <Tabs.Screen
                name="settings"
                options={{ title: "Settings", headerShown: false, tabBarIcon: ({focused}) => (
                    <View style= {styles.tabContainer}><Image source={settingsIcon} style={{width: 28, height:26, tintColor: focused? '#0066CC': '#999999'}}/></View>
                ), 
                tabBarLabel: 'Settings'
                }}
            />
            
        </Tabs>
    );
};
export default Layout;

const styles = StyleSheet.create({
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
    }
});
