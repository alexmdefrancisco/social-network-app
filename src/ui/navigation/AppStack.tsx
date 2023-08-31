// React imports
import React from 'react'

// React Native imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen imports
import HomeScreen from '@ui/screens/home'
import ModalScreen from '@ui/screens/modal'
import PostScreen from '@ui/screens/post'
import ProfileScreen from '@ui/screens/profile'
import NewPostImageScreen from '@ui/screens/newPostImage'
import NewPostDescriptionScreen from '@ui/screens/newPostDescription'

export type AppStackProps = {
    Home: undefined,
    // Profile: { userId: string },
    Profile: undefined,
    Modal: undefined,
    Post: { postId: string },
    NewPostImage: undefined,
    NewPostDescription: { imageUri: string }
}

const Stack = createNativeStackNavigator<AppStackProps>()

export default function AppStack() {
    return (
        <Stack.Navigator id='AppStack' screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen component={HomeScreen} name='Home'/>
                <Stack.Screen component={ProfileScreen} name='Profile'/>
                <Stack.Screen component={PostScreen} name='Post'/>
                <Stack.Screen component={NewPostImageScreen} name='NewPostImage'/>
                <Stack.Screen component={NewPostDescriptionScreen} name='NewPostDescription'/>
            </Stack.Group>
            <Stack.Group screenOptions={{ animation: 'fade', contentStyle: { backgroundColor: '#00000050' }, presentation: 'transparentModal' }}>
                <Stack.Screen component={ModalScreen} name='Modal'/>
            </Stack.Group>
        </Stack.Navigator>
    )
}