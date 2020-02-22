import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import Styles from './Styles';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: ''
    };

    this.textInput = React.createRef();

    this.handleGrettingBtn = this.handleGrettingBtn.bind(this);
  }

  handleGrettingBtn(e){
    this.textInput.current.clear();
    Alert.alert('Saludo', 'Hola');
  }

  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.fieldset}>
          <Text style={Styles.label}>Ingrese su nombre</Text>
          <TextInput ref={this.textInput} style={Styles.input} editable/>
          <Button title='Saludar' onPress={this.handleGrettingBtn}/>
        </View>
      </View>
    );
  }
}

export default App;
