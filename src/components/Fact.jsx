/* eslint-disable react/prop-types */
import { useState } from "react";

import CATEGORIES from "./data/categoryList";

import supabase from "../client/supabase";

const Fact = ({ fact, setFacts }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  // Update Votes
  const handleVote = async (columnName) => {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  };

  return (
    <li key={fact.id} className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source}>
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
          color: "white",
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 <strong>{fact.votesInteresting}</strong>
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 <strong>{fact.votesMindblowing}</strong>
        </button>
        <button
          onClick={() => handleVote("votesFalse")}
          disabled={isUpdating}
        >
          ⛔️ <strong>{fact.votesFalse}</strong>
        </button>
      </div>
    </li>
  );
};

export default Fact;
