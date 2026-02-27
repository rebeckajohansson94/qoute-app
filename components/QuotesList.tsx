import { FlatList } from "react-native";
import { type Quote } from "../App";
import QuoteItem from "./QuoteItem";

type QuotesListProps = {
  quotes: Quote[];
  onDelete: (id: number) => void;
};

function QuoteList({ quotes, onDelete }: QuotesListProps) {
  return (
    <FlatList
      data={quotes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <QuoteItem quote={item} onDelete={onDelete} />}
    />
  );
}

export default QuoteList;
