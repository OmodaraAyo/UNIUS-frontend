import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import BackArrow from "@/assets/images/ic--baseline-arrow-back 1.png";
import uwt from "@/assets/images/uwt send.png";
import nigeria from "@/assets/images/nigeria.png";
import dropdown from "@/assets/images/dropdown.png";
import naira from "@/assets/images/naira logo.png";
import bank from "@/assets/images/bank.png";
import arrow from "@/assets/images/bank arr.png";

const Amount = () => {
    const route = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => route.back()} style={styles.backButton}>
                    <Image source={BackArrow} style={styles.backArrow}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Amount to Buy</Text>
            </View>
            <View style={styles.general}>
                <TouchableOpacity style={styles.upper}>
                    <Image source={nigeria} />
                    <Image source={dropdown} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>You want to buy</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.currencyInput}>
                            <Image source={uwt} style={styles.currencyIcon}/>
                            <TextInput style={styles.input} placeholder="0" keyboardType="numeric"/>
                            <Text style={styles.currencyText}>UWT</Text>
                        </View>
                        <Text>Current Balance: 0 UWT = $0.00</Text>
                    </View>
                </View>
                <View style={styles.divider}/>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Amount</Text>
                    <View style={styles.currencySelector}>
                        <Image source={naira} style={styles.flagIcon}/>
                        <TextInput style={styles.input} placeholder="0" keyboardType="numeric"/>
                        <Text style={styles.currencyText}>NGN</Text>
                    </View>
                </View>
                <View style={styles.divider}/>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Update payment method</Text>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <Image source={bank} style={styles.methodIcon}/>
                        <Text style={styles.methodText}>Bank Transfer</Text>
                        <Image source={arrow} style={styles.dropdownIcon}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.quoteButton}>
                    <Text style={styles.quoteButtonText}>Get quotes</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Amount;

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
        cursor:'pointer'
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
        textAlign: 'center'
    },
    general: {
        alignSelf: 'flex-end',
        paddingRight: 8,   
    },
    upper: {
       flexDirection: 'row',
       paddingRight: 8,
       backgroundColor: '#e0e0e0',
       borderWidth: 1,
       borderRadius: 8,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 12,
    },
    inputContainer: {
        marginBottom: 16,
    },
    currencyInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    currencyIcon: {
        width: 29,
        height: 24,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    currencyText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    balanceText: {
        fontSize: 14,
        color: '#666',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 16,
    },
    currencySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
    },
    flagIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    dropdownIcon: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
    },
    methodIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    methodText: {
        fontSize: 16,
        color: '#000',
    },
    quoteButton: {
        backgroundColor: '#0857A0',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 24,
        width: 130,
        alignSelf: 'center',
    },
    quoteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})