import React from "react"
import { Button } from '@rneui/themed'

const ActionButton = ({buttonColor, buttonContentColor, buttonWidth, buttonTitle, iconName, handleAction}) => {

  return (
    <Button
      onPress={handleAction}
      title={buttonTitle}
      icon={{
        name: iconName,
        type: "font-awesome",
        size: 15,
        color: buttonContentColor,
      }}
      iconContainerStyle={{ marginRight: 2 }}
      titleStyle={{
        fontSize: 10,
        fontWeight: "700",
        color: buttonContentColor,
        marginLeft: 5,
      }}
      buttonStyle={{
        backgroundColor: buttonColor,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 10,
      }}
      containerStyle={{
        width: buttonWidth,
        zIndex: 1
      }}
    />
  )
}

export default ActionButton
