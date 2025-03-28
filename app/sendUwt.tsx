import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import BackArrow from "@/assets/images/ic--baseline-arrow-back 1.png"
import paste from "@/assets/images/paste.png";
import { SafeAreaView } from 'react-native-safe-area-context';

const SendUwt = () => {
    const navigation = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.back()} style={styles.backButton}>
                    <Image source={BackArrow} style={styles.backArrow}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Send UWT</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recipient Address</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Enter or paste Address here' placeholderTextColor="#999"/>
                        <TouchableOpacity style={styles.pasteButton}>
                            <Image source={paste} style={styles.pasteIcon}/>
                            <Text style={styles.pasteText}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider}/>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Amount</Text>
                    <View style={styles.amountRow}>
                        <TextInput
                            style={[styles.input, styles.amountInput]}
                            placeholder='UWT AMOUNT'
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity>
                            <Text style={styles.maxButton}>UWT Max</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.dollarEquivalent}>= $0.00</Text>
                    <View style={styles.divider}/>
                </View>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SendUwt;

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
    content: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    pasteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginLeft: 8,
    },
    pasteIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    pasteText: {
        fontSize: 14,
        color: '#1A237E',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 8,
    },
    amountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    amountInput: {
        flex: 1,
        marginRight: 8,
    },
    maxButton: {
        color: '#1A237E',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dollarEquivalent: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    nextButton: {
        backgroundColor: '#0857A0',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 24,
        width: 130,
        alignSelf: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});