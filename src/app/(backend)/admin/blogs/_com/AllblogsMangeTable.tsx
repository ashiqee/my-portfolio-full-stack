"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

import BlogEmbedGoogleSheet from "./EmbedSheetBlogs";

import useBlogsData from "@/hooks/useBlogsData";

export default function AllBlogsManageTable() {
  const { blogsData, loading } = useBlogsData();
  const [showTable, setShowTable] = useState(true);

  return (
    <>
      <Button onPress={() => setShowTable(!showTable)}>Toggle Table</Button>
      {showTable ? (
        <div className="mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table
              aria-label="Blogs Management Table"
              className="shadow-lg rounded-lg"
              color="secondary"
              selectionMode="none"
              removeWrapper
            >
              {blogsData && blogsData.length > 0 ? (
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
              )}
              <TableBody>
                {blogsData && blogsData.length > 0 ? (
                  blogsData.map((blog: any, index: number) => (
                    <TableRow
                      className="border-b border-gray-500/45"
                      key={index}
                    >
                      <TableCell>{blog?.createdAt}</TableCell>
                      <TableCell>
                        <Image
                          alt={blog?.title}
                          className="object-cover"
                          height={100}
                          src={blog?.image}
                          width={100}
                        />
                      </TableCell>
                      <TableCell>{blog.title}</TableCell>
                      <TableCell>{blog?.author}</TableCell>

                      <TableCell>
                        <div className="flex gap-4">
                          <button className="text-blue-600 hover:underline">
                            Edit
                          </button>
                          <button className="text-red-600 hover:underline">
                            Delete
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="text-2xl font-bold mb-4">
                      No blogs available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      ) : (
        <section>
          <BlogEmbedGoogleSheet />
        </section>
      )}
    </>
  );
}
