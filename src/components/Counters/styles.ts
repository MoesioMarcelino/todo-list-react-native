import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  countersContainer: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,

    flexDirection: "row",
  },

  createdContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },

  textCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },

  createdAmount: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#333333",
    borderRadius: 9999,
    padding: 8,
  },

  doneContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  textDone: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },

  doneAmount: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#333333",
    borderRadius: 9999,
    padding: 8,
  },
});
