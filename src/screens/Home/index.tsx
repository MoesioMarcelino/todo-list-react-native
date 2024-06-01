import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import {
  Counters,
  EmptyList,
  Header,
  ToDoComponent,
  Todo,
} from "../../components";

export function Home() {
  const [toDoList, setTodoList] = useState<Todo[]>([]);
  const [newItem, setNewItem] = useState("");

  function handleAddItem() {
    if (!newItem) {
      return Alert.alert(
        "Item incorreto!",
        "O item que você está tentando adicionar está sem descrição, revise-o e tente novamente!"
      );
    }

    if (toDoList.some(({ title }) => title === newItem)) {
      return Alert.alert(
        "Item já existente!",
        "O item que você está tentando adicionar já existe, verifique a lista já existente!"
      );
    }

    setTodoList((prevList) => [
      ...prevList,
      { id: String(Math.random() * 10000), title: newItem, done: false },
    ]);
    setNewItem("");
  }

  function handleRemoveItem(itemId: string) {
    setTodoList((prevList) => prevList.filter(({ id }) => id !== itemId));
  }

  function handleToggleItem(itemId: string) {
    setTodoList((prevList) =>
      prevList.map(({ id, done, title }) => ({
        id,
        done: itemId === id ? !done : done,
        title,
      }))
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#808080"
          placeholder="Adicione uma nova tarefa"
          onChangeText={(text) => setNewItem(text)}
          value={newItem}
          onEndEditing={handleAddItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Counters toDoList={toDoList} />

      {toDoList.length === 0 && <View style={styles.divider} />}

      <FlatList
        contentContainerStyle={styles.todoList}
        data={toDoList}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ToDoComponent
            todo={item}
            onRemove={() => handleRemoveItem(item.id)}
            onDone={() => handleToggleItem(item.id)}
          />
        )}
      />
    </View>
  );
}
