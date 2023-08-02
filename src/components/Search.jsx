import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  changeType = (event) => {
    this.setState(
      () => {
        return { type: event.target.value };
      },
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      },
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              this.props.searchMovies(this.state.search, this.state.type);
            }}
          >
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) => {
                this.setState({ search: event.target.value });
              }}
            />
          </form>
          <button
            className="btn search-btn"
            onClick={(event) => {
              event.preventDefault();
              this.props.searchMovies(this.state.search, this.state.type);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              checked={this.state.type === "all"}
              onChange={this.changeType}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              checked={this.state.type === "movie"}
              onChange={this.changeType}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              checked={this.state.type === "series"}
              onChange={this.changeType}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
