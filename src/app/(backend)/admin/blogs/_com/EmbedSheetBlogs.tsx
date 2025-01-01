'use client';

import { useState, useEffect } from 'react';
import { Input, Button } from '@nextui-org/react';

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState<string[][]>([]);
  const [editableRowIndex, setEditableRowIndex] = useState<number | null>(null);
  const [editedRow, setEditedRow] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEditClick = (index: number) => {
    console.log(index);
    console.log(blogs[index+1]);
    
    
    setEditableRowIndex(index);
    setEditedRow(blogs[index+1]);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch('/api/updateBlogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          range: `A${editableRowIndex! + 3}`, // Assuming first row is headers
          values: [editedRow],
        }),
      });

      if (response.ok) {
        setBlogs((prev) => {
          const updatedBlogs = [...prev];
          updatedBlogs[editableRowIndex!] = editedRow;
          return updatedBlogs;
        });
        setEditableRowIndex(null);
      } else {
        console.error('Failed to update data');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelClick = () => {
    setEditableRowIndex(null);
    setEditedRow([]);
  };

  return (
    <div className=" p-5">
      <h2 className="text-2xl mb-5">Manage Blogs</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              {blogs[0]?.map((header, i) => (
                <th key={i} className="px-4 py-2 text-left font-semibold text-sm">{header}</th>
              ))}
              <th className="px-4 py-2 text-left font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    {editableRowIndex === rowIndex ? (
                      <Input
                      className='w-40'
                        value={editedRow[colIndex] || ''}
                        onChange={(e) => {
                          const newRow = [...editedRow];
                          newRow[colIndex] = e.target.value;
                          setEditedRow(newRow);
                        }}
                      />
                    ) : (
                      <span>{cell}</span>
                    )}
                  </td>
                ))}
                <td className="px-4 py-2">
                  {editableRowIndex === rowIndex ? (
                    <div>
                      <Button onPress={handleSaveClick}>Save</Button>
                      <Button onPress={handleCancelClick} className="ml-2" color="danger">
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button onPress={() => handleEditClick(rowIndex)}>Edit</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
