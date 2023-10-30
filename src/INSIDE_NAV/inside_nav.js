import './inside_nav.css';


const InNav = ({ handleInputChange, query }) => {
  
  
  return (
    <nav className='in_nav'>
     
      <div className="nav-container">
        <input
          className="search-input-inside"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search product!!!"
        />
      </div>
      
    </nav>
  );
};

export default InNav;