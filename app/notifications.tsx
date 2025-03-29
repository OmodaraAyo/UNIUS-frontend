import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import BackArrow from "@/assets/images/ic--baseline-arrow-back 1.png"
import logo from "@/assets/images/unius.png"

type Notification = {  
    id: string;
    title: string;
    message: string;
    time: string;
    read: boolean;
};

const Notifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([
    {
        id: '1',
        title: 'Welcome',
        message: 'You are in! Welcome to Unius, your gateway to the world of cyptocurrency!',
        time: 'Just now',
        read: false
    }
    ]);

    const [unreadCount, setUnreadCount] = useState(1);

    const markAsRead = (id: string) => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
        setUnreadCount(prev => prev - 1);
    };

    const markAllAsRead = () => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification => ({ ...notification, read: true }))
        );
        setUnreadCount(0);
    };

    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Image 
                    source={BackArrow} 
                    style={styles.backIcon}
                />
            </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <View style={styles.overrall}>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>Unread {unreadCount}</Text>
                </View>
                <TouchableOpacity onPress={markAllAsRead}>
                    <Text style={styles.markAllText}>Mark all as read</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.notificationItem}
                data={notifications}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => markAsRead(item.id)}
                        style={[
                            styles.notificationItem,
                            !item.read && styles.unreadNotification
                        ]}
                    >
                        <View style={styles.notificationRow}>
                            <Image source={logo} style={styles.logo} />
                            <View style={styles.notificationDetails}>
                                <Text style={styles.notificationTitle}>{item.title}</Text>
                                <Text style={styles.notificationMessage}>{item.message}</Text>
                                <Text style={styles.notificationTime}>{item.time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    backButton: {
        zIndex: 999,
        cursor: 'pointer'
    },
    backIcon: {
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
    overrall: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    unreadBadge: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical:6,
        borderWidth: 1,
        borderColor: '#1A237E',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unreadText: {
        color: '#1A237E',
        fontSize: 14,
        fontWeight: '500',
    },
    markAllText: {
        color: '#1A237E',
        fontSize: 14,
        fontWeight: '500'
    },
    notificationItem: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    unreadNotification: {
        backgroundColor: '#E3F2FD',
        shadowColor: '#000',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    notificationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 42,
        height: 40,
        top: -17,
        resizeMode: 'contain',
    },
    notificationDetails: {
        flex: 1,
        marginLeft: 12,
    },
    notificationTime:{
        fontSize: 12,
        color: '#999999',
        marginLeft: 8
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    notificationMessage: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
        lineHeight: 20,
    },
    notificationTime2: {
        fontSize: 12,
        color: '#999999',
    },
});

export default Notifications;