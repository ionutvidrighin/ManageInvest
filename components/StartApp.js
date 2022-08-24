import React from "react";
import { Button } from '@rneui/themed';
import { useDispatch } from "react-redux";
import { startApp } from "../redux/appStartReducer";

const StartApp = () => {
    const dispatch = useDispatch()

    const handleStartApp = () => {
        dispatch(startApp(true))
    }

    return (
        <Button
            onPress={handleStartApp}
            title="Start"
            icon={{
                name: "sign-in",
                type: "font-awesome",
                size: 30,
                color: "black",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{
                fontSize: 30,
                fontWeight: "700",
                color: "black",
                marginLeft: 10,
            }}
            buttonStyle={{
                backgroundColor: "#e3be19",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
            }}
            containerStyle={{
                width: 250,
                marginHorizontal: 50,
                marginVertical: 10
            }}
        />
  )
}

export default StartApp
