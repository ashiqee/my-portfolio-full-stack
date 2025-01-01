"use client";

import { useState, useRef, SetStateAction } from "react";
import dynamic from "next/dynamic"; // Import dynamic
import HTMLReactParser from "html-react-parser";
import { Button, Image, Input } from "@nextui-org/react"; // Import NextUI components

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

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
            isClearable
            aria-label="Title of the blog"
            className="font-bold w-full text-black"
            label="Title of the blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <Input
            aria-label="Blog Image"
            className="w-full"
            type="file"
            onChange={handleBlogImgUpload}
          />
        </div>
      </div>
      <JoditEditor
        ref={editor}
        className="text-black bg-slate-400/25 min-h-[600px] h-[400px] leading-6" // Set min height, specific height, and line height
        value={content}
        onChange={(newContent: SetStateAction<string>) =>
          setContent(newContent)
        }
      />

      <div className="text-right mt-5">
        <Button color="primary" onPress={handleAddBlogPost}>
          Add Blog Post
        </Button>
      </div>

      {/* Displaying the blog content */}
      <div className="mt-20 text-2xl">{title}</div>
      {blogImg && <Image alt="Blog image" src={blogImg} />}
      <div>{HTMLReactParser(content)}</div>
    </div>
  );
}
