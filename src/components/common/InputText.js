import React from 'react';
import { View, TextInput} from 'react-native';

const InputText = (props) => {

    const { containerStyle, inputStyle, iconStyle } = styles;
    const { hint,
      value,
      onChangeText,
      secureTextEntry,
      fontSize = 18,
      height = (fontSize*2)+10,
      style,
      placeHolderColor= 'rgba(165,165,165,0.6)',
      icon,
      textColor = '#fff',
      multiline = false,
      maxLength = 256,
      maxLines = 4 } = props;

    const iconRender = {
      if(icon){
        return (
          <View style = {iconStyle}>
              {icon}
          </View>
        );
      }
    }

    return (
        <View style = {[containerStyle, {height: height}, style]}>
            {this.iconRender}
            <TextInput
                secureTextEntry = {secureTextEntry}
                value = { value }
                onChangeText = { onChangeText }
                style = {[inputStyle, {fontSize : fontSize, color: textColor}]}
                placeholder= { hint }
                multiline = { multiline }
                maxLength = { maxLength }
                maxLines = { maxLines }
                underlineColorAndroid= 'transparent'
                autoCorrect = { false }
                placeholderTextColor= {placeHolderColor}/>
        </View>
    );
};


const styles = {
    containerStyle:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderRadius: 18,
    },
    inputStyle:{
        paddingHorizontal: 5,
        flex: 2,
    },
    iconStyle:{
        paddingHorizontal: 5,
    }
}

export { InputText };
