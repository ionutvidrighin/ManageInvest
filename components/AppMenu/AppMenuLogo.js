import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { useDispatch } from "react-redux"
import { stopApp } from '../../redux/appStartReducer'
import ActionButton from '../ActionButton'
import MenuLogo from "../../assets/menuLogo.png"

const AppMenuLogo = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(stopApp(false))
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>

                <View style={{
                    position: 'absolute',
                    top: 7,
                    right: 7
                }}>
                    <ActionButton
                        buttonColor="#cfcfcf"
                        buttonContentColor="black"
                        buttonWidth={85}
                        buttonTitle="LogOut"
                        iconName="sign-out"
                        handleAction={handleLogOut}
                    />
                </View>
                
                <View style={styles.container.sideBox}></View>
                
                <View style={styles.container.appMenuLogoContainer}>
                    <Image source={MenuLogo} style={styles.container.appMenuLogo}/>
                </View>

                <View style={styles.container.sideBox}></View>

            </View>
        </View>
    )
}

export default AppMenuLogo

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 70,
        backgroundColor: '#f2bf49',
        borderTopRightRadius: 20,
        marginBottom: 60
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        sideBox: {
            width: 107,
            height: '55%',
            borderBottomColor: '#8a8a8a',
            borderBottomWidth: 1
        },
        appMenuLogoContainer: {
            borderRadius: 30,
            borderColor: '#8a8a8a',
            borderWidth: 1,
            padding: 5,
            marginTop: 15
        },
        appMenuLogo: {
            width: 100,
            height: 100
        }
    }
})