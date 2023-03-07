import React from "react";

const AddPost = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value,e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Post</h3>
        <input placeholder="Title" name="title" />
        <input placeholder="Body" name="body" />
        <button class="btn btn-primary mb-2" onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddPost;