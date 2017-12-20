import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    Image, 
    Dimensions, 
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.logInFB = this.logInFB.bind(this);
    }

    logInFB() {
        const { type, token } = Expo.Facebook.logInWithReadPermissionsAsync('311969105966201', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert(
            'Logged in!',
            `Hi ${(response.json()).name}!`,
          );
        }
      }




    static navigationOptions = {
        tabBarLabel: "Login",
        drawerIcon: () => {
          return (
            <MaterialIcons
            name="add-circle"
            size={24}
            color="black"
            >
            </MaterialIcons>
          );
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Welcome</Text> 
                    </View>
                </View>
            <View style={styles.photoContainer}>
                <Image
                    style={{ width: 200, height: 120 }}
                    source={require('../../../media/Logo.png')}
                ></Image>
                <Text style={styles.logoFontRed}>e-
                    <Text style={styles.logoFontBlue}>Contribution Card</Text>
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.fbButton}
                onPress={this.logInFB}>
                <Text>Connect with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.gButton}>
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    header: {
      flexDirection: 'row',
      backgroundColor: "red",
      alignItems: 'center',
      justifyContent: 'center',
      width: Window.width,
      height: 70,
    },
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    photoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300
    },
    logoFontRed: {
        marginTop: 15,  
        fontSize: 35,
        color: 'red'
    },
    logoFontBlue: {
        marginTop: 15,  
        fontSize: 35,
        color: 'blue'
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20
    },
    fbButton: {
        elevation: 4,
        height: 50,
        width: 300,
        backgroundColor:'#3C5894',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#6b0037',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0
    },
    gButton: {
        elevation: 4,
        height: 50,
        width: 300,
        backgroundColor:'#c04d3b',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#6b0037',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        marginTop: 15
    }
});


export default LoginForm;