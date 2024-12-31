"use client";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button, Input } from "@nextui-org/react"; // Import NextUI components

export default function AddBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const editor = useRef(null);

  const handleBlogImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_upload_preset"); // Add your Cloudinary upload preset here

      try {
        // Send the file to Cloudinary via POST request
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/ashiqe-portfolio`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        if (data.secure_url) {
          setBlogImg(data.secure_url); // Set the returned image URL
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleAddBlogPost = () => {
    console.log("Blog Title:", title);
    console.log("Blog Content:", content);
    console.log("Blog Image:", blogImg);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl">Add new blog post</h2>
      </div>
      <div className="flex flex-col my-10 gap-10 mb-10">
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
        className="text-black bg-slate-400/25 min-h-[600px] h-[400px] leading-6"
        onChange={(newContent) => setContent(newContent)}
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
