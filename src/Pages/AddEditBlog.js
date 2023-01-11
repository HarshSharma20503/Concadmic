import React from 'react'
import './Pages.scss';

const AddEditBlog = () => {
  return (
   <>
    <div className="container-flu mb-4">
      <div className="container">
        <div className="col-12">
          <div className="text-center heading py-2">
            Create Blog
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row blog-form">
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Title"
                  name="title"
                  value=""
                />
              </div>
              <div className="col-12 py-3">
              </div>
              <div className="col-12 py-3">
                <select
                  value=""
                  className="catg-dropdown"
                >
                  <option>Please select category</option>
                  <option>Education</option>
                  <option>Sports</option>
                </select>
              </div>
              <div className="col-12 py-3">
                <textarea
                  className="form-control description-box"
                  placeholder="Description"
                  value=""
                  name="description"
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                />
              </div>
              <div className="col-12 py-3 text-center">
                <button
                  className="btn btn-add"
                  type="submit"
                >
                 Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default AddEditBlog