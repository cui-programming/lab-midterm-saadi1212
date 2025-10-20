
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from '../ui'; //  use Text from ui layer
import { Button } from '../ui'; //  use Button from ui layer
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button onPress={() => increment(item.id)}>+</Button>
        <Button onPress={() => decrement(item.id)}>-</Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
