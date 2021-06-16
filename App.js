import * as React from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageBackground,
  Dimensions,ScrollView,TouchableOpacity
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('window').width;
const ProfileScreen = () => {
  
  
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={{paddingVertical:2}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TextInput
                  placeholder="Confrim Password"
                  style={styles.input}
                />
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TextInput
                  placeholder="Confrim Password"
                  style={styles.input}
                />
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TextInput
                  placeholder="Confrim Password"
                  style={styles.input}
                />

                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={() => null} />
                </View>
                <View style={{flex: 1}} />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:100
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default ProfileScreen;
