import React from "react";
import { logout } from '../redux/loginReducer';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Button } from '@rneui/themed';
import AppMenuItem from "./AppMenuItem";

const AppMenu = ({ isMenuOpen, closeMenu }) => {
  const dispatch = useDispatch()

  const isUserLoggedIn = useSelector(state => state.login.logged)

  const handleLogout = () => {
    dispatch(logout(false))
  }

  return (
    <View style={isUserLoggedIn ? styles.openMenu : styles.closedMenu}>
      <AppMenuItem
        itemTitle={'Calculator Investitii'}
        iconName={'calculator-outline'}
      />
      <AppMenuItem
        itemTitle={'Calculator Investitii'}
        iconName={'calculator-outline'}
      />
      <AppMenuItem
        itemTitle={'Calculator Investitii'}
        iconName={'calculator-outline'}
      />
    </View>
  );
};

export default AppMenu;

const styles = StyleSheet.create({
  closedMenu: {
    display: 'none'
  },
  openMenu: {
    display: 'flex',
    alignItems: 'center',
    height: "90%",
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: -60
  }
})
