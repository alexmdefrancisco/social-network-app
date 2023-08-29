// React imports
import React from 'react'

// React Native imports
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// Styles imports
import Content from '@ui/components/styles/content'

// Components imports
import type { AppStackProps } from '@ui/navigation/AppStack'

type ProfileScreenProps = NativeStackScreenProps<AppStackProps, 'Profile'>

export default function ProfileScreen({ navigation }: ProfileScreenProps) {

    const { width } = Dimensions.get('screen')

    const goBack = navigation.goBack

    function renderItem() {
        return(
            <TouchableOpacity>
                <Image contentFit={'cover'} source={require('@ui/assets/images/postImage.png')} style={{ borderColor: '#ffffff', borderWidth: 1, height: width/3, width: width/3 }}/>
            </TouchableOpacity>
        )
    }

    return(
        <Content>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowContainer} onPress={() => goBack()}>
                    <Image contentFit={'cover'} source={require('@ui/assets/icons/leftArrow.png')} style={styles.arrow}></Image>
                </TouchableOpacity>
                <Image contentFit={'cover'} source={require('@ui/assets/images/profileImage.png')} style={styles.image}/>
                <Text style={styles.username}>{'nuna'}</Text>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                numColumns={3}
                renderItem={renderItem}
            />
        </Content>
    )
}

const styles = StyleSheet.create({
    arrow: {
        borderRadius: 14,
        height: 28,
        width: 28
    },
    arrowContainer: {
        left: '5%',
        position: 'absolute'
    },
    header: {
        alignItems: 'center',
        marginBottom: '3%',
        width: '100%'
    },
    image: {
        borderRadius: 45,
        height: 90,
        width: 90
    },
    username: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 21,
        marginTop: 10
    }
})