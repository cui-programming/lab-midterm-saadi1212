import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/SearchAndAdd
 * Implements:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - uses only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  // Filter existing azkaar by phrase (case-insensitive)
  const filteredItems = items.filter((item) =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  // Add new zikr (unique phrases only, count starts at 0)
  const handleAdd = () => {
    const trimmed = newPhrase.trim();
    if (
      trimmed &&
      !items.some((item) => item.phrase.toLowerCase() === trimmed.toLowerCase())
    ) {
      const newItem = {
        id: Date.now().toString(),
        phrase: trimmed,
        count: 0,
      };
      setItems([...items, newItem]);
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.section}>
      {/* Search Box */}
      <TextInput
        placeholder="Search azkaar..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      {/* Add Box and Button */}
      <View style={{ flexDirection: 'row', marginVertical: 10, gap: 8 }}>
        <TextInput
          placeholder="Add new phrase"
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={[styles.input, { flex: 1 }]}
        />
        <Button onPress={handleAdd}>Add</Button>
      </View>

      {/* Filtered List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemName}>{item.phrase}</Text>
        )}
      />
    </View>
  );
}
