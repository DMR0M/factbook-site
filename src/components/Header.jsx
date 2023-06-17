/* eslint-disable react/prop-types */
const Header = ({ showForm, setShowForm }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="factbook-logo.png" alt="Today I Learned Logo" />
      </div>
      <div className="partner">
        <h4>Powered By Supabase:</h4>
        <img src="supabase-icon.png" alt="supabase" />
      </div>
      <button
        className="btn btn-large share-btn"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share A Fact"}
      </button>
    </header>
  );
};

export default Header;

