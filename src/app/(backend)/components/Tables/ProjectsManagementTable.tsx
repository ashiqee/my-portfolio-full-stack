'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image, Pagination, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ArrowDownWideNarrowIcon } from 'lucide-react';


import ProductDropDownAction from '../Dropdown/ProductDropDownAction';
import useDebounce from '@/hooks/debounce.hook';




const ProjectsManagementTable = () => {


const projects = [];



  return (
    <>
   
      <form className='flex justify-between '>
      <div className='flex gap-2 items-center'>
       <Input
          className="max-w-60 py-3"
          name="searchTerm"
          placeholder="Search here..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button className="  px-6"  onClick={()=>setIsAddOpen(true)}>Add New Product</Button>
       </div>
        <div>
        <Dropdown>
          <DropdownTrigger>
            <button className="px-4 py-2 flex gap-2 border-1 rounded-md text-white ">
            <ArrowDownWideNarrowIcon/> Sort By: {sortBy} ({sortOrder}) 
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Sort Options"
            onAction={(key) => {
              if (key === 'createdAt' || key === 'status') {
                setSortBy(key);
              } else if (key === 'asc' || key === 'desc') {
                setSortOrder(key as 'asc' | 'desc');
              }
            }}
          >
            <DropdownItem key="createdAt">Sort by Created At</DropdownItem>
            <DropdownItem key="shop">Sort by Shop</DropdownItem>
            <DropdownItem key="asc">Ascending</DropdownItem>
            <DropdownItem key="desc">Descending</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
      </form>
  

{projects.length > 0 &&  <>

   
  <Table aria-label="Products Management Table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Product Name</TableColumn> 
          <TableColumn>Product Category</TableColumn> 
          <TableColumn>Product Price</TableColumn> 
          <TableColumn>Stock Qty</TableColumn>
          <TableColumn>Discount</TableColumn> 
          <TableColumn>FlashSale Status</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody >
          {projects?.map((product: any, i: number) => (
            <TableRow key={product.id} className='bg-slate-800/15 rounded-md hover:bg-slate-700/10 hover:rounded-md'>
              <TableCell>{(page - 1) * limit + i + 1}</TableCell>
              <TableCell>
                <Image className="w-12 h-12 hover:scale-150" src={product.images[0]} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
             
              <TableCell>{product?.category?.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                {product.inventoryCount}
             
              </TableCell>
              <TableCell>{product.discount}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>
                    {/* action modal  */}
             Edit
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="py-2  flex justify-between items-center">
        <p>
          Total Products : {0}
        </p>
        <Pagination 
       
          color="primary" 
          page={page} 
          total={total} 
          onChange={(pageNumber) => setPage(pageNumber)} 
        />
      </div>
</>


}
    </>
  );
};

export default ProjectsManagementTable;
