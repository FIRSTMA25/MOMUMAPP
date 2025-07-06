import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PregnancyTracker() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [dueDate, setDueDate] = useState('');

  const calculateDueDate = () => {
    // احتساب موعد الولادة المتوقع (40 أسبوعاً من آخر دورة)
    if (lastPeriod) {
      const date = new Date(lastPeriod);
      date.setDate(date.getDate() + 280); // 40 أسبوعاً
      setDueDate(date.toLocaleDateString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>متابعة الحمل</Text>
      <TextInput
        style={styles.input}
        placeholder="تاريخ آخر دورة (YYYY-MM-DD)"
        value={lastPeriod}
        onChangeText={setLastPeriod}
      />
      <Button title="احسب موعد الولادة" onPress={calculateDueDate} />
      {dueDate ? (
        <Text style={styles.result}>موعد الولادة المتوقع: {dueDate}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});