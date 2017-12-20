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
                    <View style={styles.iconContainer}>
                        <MaterialIcons
                            name="view-headline"
                            size={35}
                            color="white"
                            style={styles.icon}
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                        </MaterialIcons>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Login In</Text> 
                    </View>
                    <View style={styles.iconContainer}>
                    </View>
                </View>
            <Image
                style={{ width: 200, height: 120 }}
                source={require('../../../media/Logo.png')}
            ></Image>
            <Text>e-Contribution Card</Text>
        </View>
        );
    }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    }
});


export default LoginForm;