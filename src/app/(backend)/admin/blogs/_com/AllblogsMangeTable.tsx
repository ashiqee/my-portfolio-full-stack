"use client";

import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import useBlogsData from "@/hooks/useBlogsData";
import Image from "next/image";
import BlogEmbedGoogleSheet from "./EmbedSheetBlogs";
import { useState } from "react";

export default function AllBlogsManageTable() {
  const { blogsData,loading  } = useBlogsData();
  const [showTable, setShowTable] = useState(true);

  return (
   <>

   <Button onPress={() => setShowTable(!showTable)}>Toggle Table</Button>
   {
    showTable ?  <div className="mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
  {loading ? <p>Loading...</p> : (    <Table
      aria-label="Blogs Management Table"
      className="shadow-lg rounded-lg"
      selectionMode="none"
      color="secondary"
    >
      {
          blogsData && blogsData.length > 0 ? (
            <TableHeader>
              <TableColumn key="createdAt">Created At</TableColumn>
              <TableColumn key="image">Image</TableColumn>
              <TableColumn key="title">Title</TableColumn>
              <TableColumn key="author">Author</TableColumn>
              <TableColumn key="actions">Actions</TableColumn>
            </TableHeader>
          ) : (
            <TableHeader>
              <TableColumn key="no">No</TableColumn>
             
            </TableHeader>
          )
      }
      <TableBody>
        {blogsData && blogsData.length > 0 ? (
          blogsData.map((blog: any, index: number) => (
            <TableRow key={index}>
               <TableCell>{blog?.createdAt}</TableCell>
              <TableCell>
                 <Image
                  src={blog?.image}
                  alt={blog?.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />


              </TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog?.author}</TableCell>
             
              <TableCell>
                <div className="flex gap-4">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell className="text-2xl font-bold mb-4" >
              No blogs available.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )}

  
  </div> : <section>
      <BlogEmbedGoogleSheet/>
  </section>
   }
   
   </>
  );
}
