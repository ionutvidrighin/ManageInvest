import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { menuItems } from "../../appMenuConstants";
import { updateScreen } from '../../redux/activeScreenReducer';
import AppMenuLogo from "./AppMenuLogo";
import AppMenuItem from "./AppMenuItem";

const AppMenu = () => {
  const dispatch = useDispatch()
  const isAppStarted = useSelector(state => state.appStart.start)

  const goToInvestCalculator = () => {
    dispatch(updateScreen({
      id: 2,
      name: 'InvestCalculator',
      active: true
    }))
  }

  return (
    <View style={isAppStarted ? styles.openMenu : styles.closedMenu}>

      <AppMenuLogo />

      <AppMenuItem
        goToPage={goToInvestCalculator}
        itemTitle={menuItems.INVEST_CALCULATOR.title}
        iconName={menuItems.INVEST_CALCULATOR.icon}
      />
      {/* <AppMenuItem
        itemTitle={'Calculator 23'}
        iconName={''}
      />
      <AppMenuItem
        itemTitle={'Calculator 44'}
        iconName={''}
      /> */}
    </View>
  );
};

export default AppMenu;

const styles = StyleSheet.create({
  closedMenu: {
    display: 'none'
  },
  openMenu: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: "95%",
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: -60,
    marginTop: -30
  }
})
