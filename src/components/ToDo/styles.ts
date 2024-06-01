import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderWidth: 1,

    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    gap: 16,
  },

  checkboxPending: {
    height: 18,
    width: 18,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#4EA8DE",
  },

  checkboxDone: {
    height: 18,
    width: 18,
    borderRadius: 9999,
    // borderWidth: 2,
    backgroundColor: "#5E60CE",
  },

  textPending: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
  },

  textDone: {
    flex: 1,
    color: "#808080",
    textDecorationLine: "line-through",
    fontSize: 15,
  },
});
