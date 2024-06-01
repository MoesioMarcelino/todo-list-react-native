import { Text, View } from "react-native";
import { styles } from "./styles";
import { Todo } from "../ToDo";

export type CountersProps = {
  toDoList: Todo[];
};

export function Counters({ toDoList }: CountersProps) {
  const createdAmount = toDoList.reduce(
    (acc, { done }) => (done ? acc : acc + 1),
    0
  );

  const doneAmount = toDoList.reduce(
    (acc, { done }) => (done ? acc + 1 : acc),
    0
  );

  return (
    <View style={styles.countersContainer}>
      <View style={styles.createdContainer}>
        <Text style={styles.textCreated}>Criadas</Text>
        <Text style={styles.createdAmount}>{createdAmount}</Text>
      </View>
      <View style={styles.doneContainer}>
        <Text style={styles.textDone}>Concluídas</Text>
        <Text style={styles.doneAmount}>{doneAmount}</Text>
      </View>
    </View>
  );
}
