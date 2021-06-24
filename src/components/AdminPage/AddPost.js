import React, { useRef, useState } from "react";
import Input from "@material-ui/core/Input";
import JoditEditor from "jodit-react";
import { Button } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { addPost } from "../../Redux/Action";



const AddPost = ({allPosts, currentUser,addPost}) => {
  // const dispatch = useDispatch()

  const editor = useRef(null);
  const [editorData, setEditorData] = useState("");
  const [postTitle, setPostTitle] =useState("")
  const [featuredImage, setFeaturedImage] = useState(null);

  

  const handleTitleChange=(e)=>{
    setPostTitle(e.target.value)
  }

  const handleFileUpload=(e)=>{
  setFeaturedImage(e.target.files[0])
  }

  const handleSubmitPost=(e)=>{
    e.preventDefault();
    if(!postTitle || !featuredImage || !editorData) return;
    addPost({
      id: allPosts.length +1,
      title: postTitle,
      featuredImage:URL.createObjectURL(featuredImage),
      content: editorData,
      createdAt: Date.now(),
      author: currentUser.email
    });
    alert("Post added");
    setEditorData("");
    setPostTitle("");
    setFeaturedImage(null)
    
  }

  const config = {
    readonly: false,
    disablePlugins:
      "image,video,media,file,class-span,image-properties,image-processor",
    buttons:
      "fontsize,bold,italic,underline,strikethrough,eraser,ul,ol,indent,outdent,left,font,paragraph,brush,cut,copy,print",
    removeButtons: ["file", "image", "copyformat", "source","print"],
  };

  return (
    <div className="mx-4 rounded-lg bg-white p-3 ">
      <h3 className="text-black" >Create a post</h3>
      <hr/>
      <form className="p-2" noValidate autoComplete="off" onSubmit={handleSubmitPost} >
        <div className="mb-3  p-2 bg-light rounded shadow-sm">
          <label htmlFor="post-title" className="font-weight-bold text-blue" required>
            Enter post title:
          </label>
          <Input id="post-title" className="w-100" placeholder="Title" onChange={handleTitleChange} value={postTitle} />
        </div>
        <div className="my-3 p-2 bg-light rounded shadow-sm">
          <label htmlFor="image" className="font-weight-bold text-blue ">
            Featured Image
          </label>
          <input
            id="image"
            title="Featured Image"
            className="form-control-file"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            required
          />
        </div>
        <div className="my-3 p-2 bg-light rounded shadow-sm">
          <label htmlFor="content" className="font-weight-bold text-blue ">
            Write a post:
          </label>
          <JoditEditor
            ref={editor}
            id="content"
            value={editorData}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setEditorData(newContent)}
            required
          />
        </div>
        <div className="text-right" >
        <Button variant="contained" type="submit" color="primary">Submit</Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps=(state)=>({
  allPosts: state.allPosts,
  currentUser: state.currentUser
})

export default connect(mapStateToProps,({addPost}))(AddPost);
