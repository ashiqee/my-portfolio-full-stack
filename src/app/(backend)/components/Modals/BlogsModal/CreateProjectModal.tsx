import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import TRForm from "@/components/forms/TRFrom";
import TRInput from "@/components/forms/TRInput";
import TRTextarea from "@/components/forms/TRTextarea";
import TRSelect from "@/components/forms/TRSelect";




const CreateProjectModal = ({
  shops,
  categories,
  setIsOpen,
 
}: {
   shops:any;
   categories:any;
  setIsOpen: any;
 
}) => {
  const [images, setImages] = useState<File[]>([]);
 
  const addProductMutation = useAddProduct()



  const onSubmit = async (data: any) => {


    // Create a FormData object
    const formData = new FormData();

    // Add JSON data
    const productData = {
      product: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      discount: parseFloat(data.discount),
      categoryId: parseInt(data.categoryId),
      vendorShopId: parseInt(data.vendorShopId),
      inventoryCount: parseInt(data.inventoryCount),
      },
    };
    

    formData.append("data", JSON.stringify(productData));

    images.forEach((file) => {
      formData.append("files", file);
    });

   
    // Pass the FormData to the mutation handler
      addProductMutation.mutate(formData);

    // Trigger loading state
    setIsOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files)); 
    }
  };

  
  return (
    <>
   <div className="absolute z-50">
   <div className="fixed   z-40 inset-0 bg-slate-500/35 flex flex-col w-full bg-opacity-75  justify-center items-center ">
        <div className="md:md:max-w-[70vw]">
         
          <div
            className=" relative  z-40 min-w-3xl max-w-3xl mx-auto max-h-[90vh] my-auto 
         rounded-xl p-6 overflow-hidden overflow-y-auto 
          bg-gray-900  text-white text-center"
          >
             <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>X</button>
            <div className="space-y-2 flex flex-col ">
             <h2 className="text-xl font-semibold">Add New Product</h2>
             
             <TRForm onSubmit={onSubmit}>
  <div className="py-1.5 flex gap-4">
    <TRInput isRequired label="Product Name" name="name" type="text" />
  
  </div>
 
  <div className="py-1.5 md:flex-row flex flex-col gap-4">
    <TRInput isRequired  label="Product Price" name="price" type="number" />
    <TRInput  label="Discount Price" name="discount" type="number" />
    <TRInput isRequired label="Stock Qty" name="inventoryCount" type="number" />
 
  </div>
  <div className="py-1.5 md:flex-row flex flex-col gap-4 w-full justify-between ">
  <TRSelect
      isRequired
      label="Select Category"
      name="categoryId"
      options={categories?.map((category:any) => ({
        label: category.name,
        value: category.id,
      }))}
    />
    <TRSelect
      isRequired
      label="Select Shop"
      name="vendorShopId"
      options={shops?.map((shop:any) => ({
        label: shop.name,
        value: shop.id,
      }))}
    />
 </div>
  <div className="py-1.5 flex gap-4">

    <TRTextarea
      label="Product Description"
      name="description"
      rows={4}
      type="text"
    />
  </div>
  <div className="py-1.5">
    <Input
      multiple
      accept="image/*"
      label="Product Images"
      type="file"
      onChange={handleFileChange}
    />
  </div>


      
      

        <div className="flex mt-4 gap-2 justify-end">
          <Button fullWidth color="primary" type="submit">
            Add New Product
          </Button>
        </div>
      
      </TRForm>
             
             
             
             </div>

          </div>
        </div>
      </div>
   </div>
    </>
  );
};

export default CreateProjectModal;