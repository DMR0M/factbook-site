/* eslint-disable react/prop-types */

import Fact from "./Fact";

const FactsList = ({ facts, setFacts }) => {
  if (facts.length === 0) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one 🤩
      </p>
    );
  }

  return (
    <div>
      <section>
        <ul className="facts-list">
          {facts.map((fact) => {
            return <Fact key={fact.id} fact={fact} setFacts={setFacts} />;
          })}
        </ul>
      </section>
      <p>There are {facts.length} facts in the database. Add your own! </p>
    </div>
  );
};

export default FactsList;
