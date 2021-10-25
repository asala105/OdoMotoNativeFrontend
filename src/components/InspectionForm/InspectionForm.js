import React from 'react'
import {CheckBox, View, StyleSheet, Text} from 'react-native'
export default function InspectionForm() {
        const [isSelected, setSelection] = useState(false);

        return (
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        checkboxContainer: {
          flexDirection: "row",
          marginBottom: 20,
        },
        checkbox: {
          alignSelf: "center",
        },
        label: {
          margin: 8,
        },
      });
