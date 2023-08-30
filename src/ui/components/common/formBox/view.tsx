// React imports
import React, { ComponentProps, Dispatch, SetStateAction } from 'react'

// React Native imports
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps } from 'react-native'

interface FormBoxProps {
    onChangeText?: Dispatch<SetStateAction<string>>
    placeholder: string
    title: string,
    secureText?: boolean,
    style?: StyleProp<TextInputProps>,
    autoCapitalize?: ComponentProps<typeof TextInput>['autoCapitalize']
}

export default function FormBox({ autoCapitalize, onChangeText, placeholder, secureText, style, title }: FormBoxProps) {
    return (
        <>
            <Text style={styles.formTitle}>
                {title}
            </Text>
            <TextInput autoCapitalize={autoCapitalize} placeholder={placeholder} placeholderTextColor={'#aaabae'} secureTextEntry={secureText} style={[styles.formText, style]} onChangeText={onChangeText}/>
        </>
    )
}

const styles = StyleSheet.create({
    formText: {
        borderColor: '#f0f0f4',
        borderRadius: 6,
        borderWidth: 1,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        height: 51,
        paddingHorizontal: 15,
        width: '100%'
    },
    formTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginBottom: '1%',
        marginTop: '4%'
    }
})