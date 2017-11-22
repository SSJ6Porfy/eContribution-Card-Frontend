import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         TextInput,
         ScrollView,
         Button,
         TouchableOpacity,
         } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class newContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static navigationOptions = {
    tabBarLabel: "New Contribution",
    drawerIcon: () => {
      return (
        <MaterialIcons
        name="add-circle-outline"
        size={24}
        color="black"
        >
        </MaterialIcons>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
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
            <View style={styles.iconContainer}>
                <Text style={styles.headerText}>New Contribution!</Text> 
            </View>
            <View style={styles.iconContainer}>
            </View>
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"First Name"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Last Name"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Street Address"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"City / Town"}
        />
        <View style={styles.rowDiv}>
          <TextInput
            style={styles.stateZipText}
            placeholder={"ST"}
          />
          <TextInput
            style={styles.stateZipText}
            placeholder={"Zip Code"}
          />
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Phone Number"}
        />
        <View style={styles.rowDiv}>
          <TextInput
            style={styles.stateZipText}
            placeholder={"Amount"}
          />
          <TextInput
            style={styles.stateZipText}
            placeholder={"Type"}
          />
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"Event"}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Contribution</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#7a6ff0",
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
  icon: {
    marginLeft: 5,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 15,
  },
  textInputs: {
    flexDirection: "row",
    height: 55,
    width: Window.width,
    borderTopColor: "transparent",
    borderColor: 'gray', 
    borderWidth: 1,
    paddingLeft: 10,
  },
  rowDiv: {
    flexDirection: "row",
    width: Window.width,
  },
  stateZipText: {
    flex: 2,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderColor: 'gray', 
    borderWidth: 1,
    height: 55,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c9c4ff"
  },
  button: {
    elevation: 4,
    height: 50,
    backgroundColor:'#fff',
    borderWidth: 3,
    borderColor: "#7a6ff0",
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
  buttonText: {
    color: "#7a6ff0",
    fontWeight: "bold",
    fontSize: 30,
  },
});
