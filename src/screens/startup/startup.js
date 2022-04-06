import React,{useReducer, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {button, textInput} from '../../components';
import {color} from '../../theme';
import {styles} from './startup.styles';
import {user,} from "../../context";
import {tests,} from "../../context";

const initialState = {
  tests,
  user
};

function reducer(state, action.type ="change") {
  user: userReducer (state, action)
  tests: testReducer (state, action)

}

const [state, dispatch] = useReducer(reducer, initialState);

const submittion = async => {

  dispatch({type: 'changeName'});
}

export const Startup = ({ButtonPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={'user'} />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          isSensitive={true}
          placeholder={'test'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Go'}
          buttonStyle={styles.button}
          onPress={ButtonPress}
        />
      </View>

      <View>
       
      </View>

    </View>
  );
};
