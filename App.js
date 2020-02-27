import React, { Component } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import Styles from './Styles';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      gretting: ''
    };

    this.textInput = React.createRef();

    this.handleGrettingBtn = this.handleGrettingBtn.bind(this);
  }

  handleGrettingBtn(){
    this.textInput.current.clear();
    Keyboard.dismiss();

    this.setState({
      gretting: `Hola ${this.state.name}, ¡Saludos!`
    });
  }

  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.fieldset}>
          <Text style={Styles.label}>Ingrese su nombre</Text>
          <TextInput
              ref={this.textInput}
              style={Styles.input}
              onChangeText={(text) => this.setState({name: text})}
              editable/>
          <Button title='Saludar'
                  onPress={this.handleGrettingBtn}/>
        </View>

        <Text style={Styles.gretting}>
            { this.state.gretting }
        </Text>
      </View>
    );
  }
}

export default App;
