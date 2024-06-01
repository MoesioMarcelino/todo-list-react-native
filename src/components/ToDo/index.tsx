import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export type TodoProps = {
  todo: Todo;
  onRemove?: () => void;
  onDone?: () => void;
};

export function ToDoComponent({ todo, onRemove, onDone }: TodoProps) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onDone}>
        <View
          style={todo.done ? styles.checkboxDone : styles.checkboxPending}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onDone}>
        <Text style={todo.done ? styles.textDone : styles.textPending}>
          {todo.title}
        </Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onRemove}>
        <Image source={require("./delete.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
}
