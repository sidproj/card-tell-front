import { DragDropProvider } from "@dnd-kit/react";
import "./App.css";
import Hand from "./components/hand";
import { useState } from "react";
import Card from "./components/card";

function App() {
  const [played, setPlayed] = useState<string[]>([]);
  const [hand, setHand] = useState<string[]>(["1", "2", "3"]);

  return (
    <>
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;
          const { target, source } = event.operation;
          if (target?.id === "first") {
            if(source?.id && played.includes(source.id.toString()) ) return;
            setPlayed((old: any) => {
              return [...old, source?.id];
            });
            setHand((old) => [...old.filter((id) => id !== source?.id)]);
          } else if (target?.id === "second") {
            if(source?.id && hand.includes(source.id.toString()) ) return;
            setHand((old: any) => {
              return [...old, source?.id];
            });
            setPlayed((old) => [...old.filter((id) => id !== source?.id)]);
          }
        }}
      >
        <section id="center" className="flex flex-col">
          <Hand id="first" card_keys={played} />
          <Hand id="second" card_keys={hand} />
        </section>
      </DragDropProvider>
    </>
  );
}

export default App;
