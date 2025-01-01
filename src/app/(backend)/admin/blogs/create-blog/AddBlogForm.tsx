"use client";
import { useState, useRef, SetStateAction } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button, Input } from "@nextui-org/react"; // Import NextUI components

export default function AddBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const editor = useRef(null);

  const handleBlogImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlogPost = () => {
    // Handle blog post submission logic here
    console.log("Blog Title:", title);
    console.log("Blog Content:", content);
    console.log("Blog Image:", blogImg);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl">Add new blog post</h2>
      </div>
      <div className="flex flex-col  my-10 gap-10 mb-10">
        <div className="w-full">
          <Input
            aria-label="Title of the blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isClearable
            label="Title of the blog"
            className="font-bold w-full text-black"
          />
        </div>
        <div className="w-full">
          <Input
            type="file"
            aria-label="Blog Image"
            onChange={handleBlogImgUpload}
            className="w-full"
          />
        </div>
      </div>
      <JoditEditor
  ref={editor}
  value={content}
  className="text-black bg-slate-400/25 min-h-[600px] h-[400px] leading-6" // Set min height, specific height, and line height
  onChange={(newContent: SetStateAction<string>) => setContent(newContent)}
/>

      <div className="text-right mt-5">
        <Button onPress={handleAddBlogPost} color="primary">
          Add Blog Post
        </Button>
      </div>

      {/* Displaying the blog content */}
      <div className="mt-20 text-2xl">{title}</div>
      {blogImg && <img src={blogImg} alt="Blog image" />}
      <div>{HTMLReactParser(content)}</div>
    </div>
  );
}
