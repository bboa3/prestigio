import React from "react";
interface Props { }

const CommentForm: React.FC<Props> = () => {

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="th-comment-form">
      <div className="form-title">
        <h3 className="blog-inner-title mb-2">Leave a Comment</h3>
        <p className="form-text">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <input type="text" placeholder="Your Name*" className="form-control" required />
            <i className="far fa-user"></i>
          </div>
          <div className="col-md-6 form-group">
            <input type="email" placeholder="Your Email*" className="form-control" required />
            <i className="far fa-envelope"></i>
          </div>
          <div className="col-12 form-group">
            <input type="text" placeholder="Website" className="form-control" />
            <i className="far fa-globe"></i>
          </div>
          <div className="col-12 form-group">
            <textarea placeholder="Write a Comment*" className="form-control" required></textarea>
            <i className="far fa-pencil"></i>
          </div>
          <div className="col-12 form-group mb-0">
            <button className="th-btn" type="submit">
              Publicar comentário
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;