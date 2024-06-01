import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingLeft: 24,
    paddingRight: 24,
  },

  form: {
    marginTop: -32,

    flexDirection: "row",
    gap: 8,
  },

  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 6,
    color: "#fff",
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#1E6F9F",
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  divider: {
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
  },

  todoList: {
    gap: 8,
  },
});
