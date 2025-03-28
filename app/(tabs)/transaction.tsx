import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useRouter } from 'expo-router';
import BackArrow from "@/assets/images/ic--baseline-arrow-back 1.png"

const Transaction = () => {
    const navigation = useRouter();

    return (
       <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.back()} style={styles.backButton}>
                    <Image 
                        source={BackArrow} 
                        style={styles.backArrow} 
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Transaction</Text>
            </View>
            <View style={styles.transactionContainer}>
                <Text style={styles.historyText}>Transaction History would appear here</Text>
                <TouchableOpacity>
                    <Text>Refresh</Text>
                </TouchableOpacity>
            </View>
       </View>
    )
}
export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        zIndex: 999,
        cursor: 'pointer',
    },
    backArrow: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A237E',
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    transactionContainer:{
        flex: 0,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:10,
        paddingHorizontal: 20,
    },
    historyText:{
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    refreshText: {
        fontSize: 16,
        color: '#1A237E',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})