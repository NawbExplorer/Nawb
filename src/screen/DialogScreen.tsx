import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const DialogScreen = (props: StackScreenProps<any>) => {
  const { route, navigation } = props;
  const { colors } = useTheme();

  return (
    <View style={dialogStyles.container}>
      {/* <TouchableWithoutFeedback
        onBlur={() => {}}
        // onPress={() => {
        //   props.navigation.goBack();
        // }}
      > */}
      <View
        style={[
          dialogStyles.dialog,
          { backgroundColor: colors.card, maxHeight: 300 },
        ]}>
        <ScrollView pointerEvents="box-only">
          <Text selectable={true}>
            Mise en place is a French term that literally means “put in place.”
            It also refers to a way cooks in professional kitchens and
            restaurants set up their work stations—first by gathering all
            ingredients for a recipes, partially preparing them (like measuring
            out and chopping), and setting them all near each other. Setting up
            mise en place before cooking is another top tip for home cooks, as
            it seriously helps with organization. It’ll pretty much guarantee
            you never forget to add an ingredient and save you time from running
            back and forth from the pantry ten times. Mise en place is a French
            term that literally means “put in place.” It also refers to a way
            cooks in professional kitchens and restaurants set up their work
            stations—first by gathering all ingredients for a recipes, partially
            preparing them (like measuring out and chopping), and setting them
            all near each other. Setting up mise en place before cooking is
            another top tip for home cooks, as it seriously helps with
            organization. It’ll pretty much guarantee you never forget to add an
            ingredient and save you time from running back and forth from the
            pantry ten times. Mise en place is a French term that literally
            means “put in place.” It also refers to a way cooks in professional
            kitchens and restaurants set up their work stations—first by
            gathering all ingredients for a recipes, partially preparing them
            (like measuring out and chopping), and setting them all near each
            other. Setting up mise en place before cooking is another top tip
            for home cooks, as it seriously helps with organization. It’ll
            pretty much guarantee you never forget to add an ingredient and save
            you time from running back and forth from the pantry ten times. Mise
            en place is a French term that literally means “put in place.” It
            also refers to a way cooks in professional kitchens and restaurants
            set up their work stations—first by gathering all ingredients for a
            recipes, partially preparing them (like measuring out and chopping),
            and setting them all near each other. Setting up mise en place
            before cooking is another top tip for home cooks, as it seriously
            helps with organization. It’ll pretty much guarantee you never
            forget to add an ingredient and save you time from running back and
            forth from the pantry ten times. Mise en place is a French term that
            literally means “put in place.” It also refers to a way cooks in
            professional kitchens and restaurants set up their work
            stations—first by gathering all ingredients for a recipes, partially
            preparing them (like measuring out and chopping), and setting them
            all near each other. Setting up mise en place before cooking is
            another top tip for home cooks, as it seriously helps with
            organization. It’ll pretty much guarantee you never forget to add an
            ingredient and save you time from running back and forth from the
            pantry ten times.
          </Text>
        </ScrollView>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

const dialogStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    width: '80%',
    maxWidth: 400,
    borderRadius: 5,
  },
  close: {
    alignSelf: 'flex-end',
  },
});
