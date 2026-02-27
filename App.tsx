import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import QuoteList from "./components/QuotesList";

export type Quote = {
  text: string;
  author: string;
  id: number;
};

export default function App() {
  const [savedQuotes, setSavedQuotes] = useState<Quote[]>([]);

  async function fetchQuote() {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();

    const item = data;

    // Skapar ett citat-objekt med text, författare & id från api'et
    const newQuote: Quote = {
      text: item.quote,
      author: item.author,
      id: item.id,
    };

    // Lägger nya quoten först (så senaste kommer överst)
    setSavedQuotes((prev) => [newQuote, ...prev]);
  }

  // Tar bort ett citat från listan genom att skapa en ny array där alla citat med ett annat id än det angivna behålls. setSavedQuotes uppdaterar state med den nya listan.
  function deleteQuote(id: number) {
    setSavedQuotes((prev) => prev.filter((q) => q.id !== id));
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Quotes App</Text>
        </View>

        <View style={styles.main}>
          <Pressable style={styles.button} onPress={fetchQuote}>
            <Text style={styles.buttonText}>Fetch random quote 💫</Text>
          </Pressable>

          <View>
            <QuoteList quotes={savedQuotes} onDelete={deleteQuote} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#140028",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  main: {
    flex: 1,
    marginTop: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#F4D97C",
  },
  button: {
    width: "100%",
    backgroundColor: "#7B2FF7",
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
