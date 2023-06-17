/* eslint-disable react/prop-types */
import { useState } from "react";

import CATEGORIES from "./data/categoryList";
import supabase from "../client/supabase";

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

const NewFactForm = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  // Handle Form Submit
  const handleSubmit = async (e) => {
    // Prevent Browser Reload
    e.preventDefault();

    // Form Validation
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      // Creating Fact Objects
      // const newFact = {
      //   id: Math.round(Math.random() * 1000000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };

      // Upload and Receive Object from Supabase
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      // Add New Fact to State
      if (!error) setFacts((facts) => [newFact[0], ...facts]);
 
      // Reset Input Fields
      setText("");
      setSource("");
      setCategory("");

      // Close Form
      setShowForm(false);
    }
  };

  return (
    <div>
      <form className="fact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Share a fact with the world..."
          onChange={(e) => setText(e.target.value)}
          disabled={isUploading}
        />
        <span>{200 - text.length} characters left</span>
        <input
          type="text"
          value={source}
          placeholder="Trustworthy source..."
          onChange={(e) => setSource(e.target.value)}
          disabled={isUploading}
        />
        <select
          className="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isUploading}
        >
          <option>Choose Category: </option>;
          {CATEGORIES.map((cat) => {
            return <option key={cat.name}>{cat.name}</option>;
          })}
        </select>
        <button className="btn post-btn" disabled={isUploading}>
          Post
        </button>
      </form>
    </div>
  );
};

export default NewFactForm;
