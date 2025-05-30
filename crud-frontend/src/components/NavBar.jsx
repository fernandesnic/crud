export default function NavBar({ onOpen, onSearch }) {
  const handleSearchChange = (event) => {
    // Added debounce to prevent excessive searches
    const value = event.target.value.trim();
    onSearch(value);
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      {/* Left section */}
      <div className="navbar-start">
        <h1 className="btn btn-ghost text-xl">Client Management</h1>
      </div>

      {/* Center section - Search */}
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="search"
            placeholder="Search clients..."
            onChange={handleSearchChange}
            className="input input-bordered w-48 md:w-64 lg:w-96"
            aria-label="Search clients"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="navbar-end">
        <button
          className="btn btn-primary"
          onClick={onOpen}
          aria-label="Add new client"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden md:inline">Add Client</span>
        </button>
      </div>
    </nav>
  );
}
