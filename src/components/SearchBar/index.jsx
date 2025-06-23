
import { useState } from "react";
import { Form, Input, Button } from "./style";

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Busca un artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
}

export default SearchBar;