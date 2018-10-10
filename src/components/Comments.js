import React from "react";
import "./Comments.css";

export default class Comments extends React.Component {
  render() {
    const shownComments = this.props.allCommentsRevealed
      ? this.props.comments
      : this.props.comments.slice(0, 3);

    return (
      <ul>
        {shownComments.map((comment, index) => (
          <div key={index}>
            <div className="Comments-text">{comment.text}</div>
            <button
              className="Comments-delete-button"
              onClick={this.props.handleDeleteComment.bind(this, comment.id)}
            >
              Delete
            </button>
          </div>
        ))}
        {!this.props.allCommentsRevealed & (this.props.comments.length > 3) ? (
          <button
            key="button"
            className="Posts-more-comments"
            onClick={this.props.handleRevealAllComments}
          >
            Load More Comments
          </button>
        ) : null}
      </ul>
    );
  }
}
