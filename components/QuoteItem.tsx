import { View, Text, Pressable, StyleSheet } from "react-native";
import { type Quote } from "../App";

type QuoteCardProps = {
  quote: Quote;
  onDelete: (id: number) => void;
};

export default function QuoteItem({ quote, onDelete }: QuoteCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.quoteText}>{quote.text}</Text>
      <Text style={styles.authorText}>{quote.author}</Text>
      <Pressable onPress={() => onDelete(quote.id)}>
        <Text style={styles.deleteText}>Remove</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3B0A66",
    padding: 22,
    borderRadius: 22,
    marginBottom: 16,
  },
  quoteText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 14,
  },
  authorText: {
    color: "#F4D97C",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  deleteText: {
    color: "#C9B3FF",
    textAlign: "center",
    fontSize: 15,
  },
});
