import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image
} from 'react-native'

const ListItem = (props) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.listContainer}>
                <View>
                    <Image style={{ height: 220 }} resizeMode='stretch' source={{ uri: props.Image }} />
                </View>
                <View style={styles.downContainer}>
                    <View style={styles.downContainer}>
                        <View>
                            <Text style={styles.title}>{props.Name}</Text>
                            <Text style={styles.titleLocation}>{props.Location}</Text>
                        </View>

                        {/* {
                props.data.isPopular && <Image  source={require('../assets/burn.png')} />
                } */}

                    </View>
                    <View style={styles.downContainer}>
                        <Image style={{ width: 25, height: 25 }} source={require('../assets/heart.png')} />
                        <Text style={{ fontSize: 18 }}>{props.Likes}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        height: Dimensions.get('window').height * 0.3,
        margin: 10,
       
    },
    downContainer: {
        backgroundColor: '#eceff1',
        height: Dimensions.get('window').height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    titleLocation: {
        fontSize: 20,
        marginLeft: 5,
    }
})

export { ListItem }