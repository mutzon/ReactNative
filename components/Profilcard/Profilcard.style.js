import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    /* shadow-generator
https://ethercreative.github.io/react-native-shadow-generator/ */

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "red",
  },
  header: { flexDirection: "row" },
  social: { flexDirection: "row", justifyContent: "space-evenly", padding: 10 },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  socialBtn: {
    borderRadius: 50,
    backgroundColor: "#eee",
    padding: 10,
  },
});
