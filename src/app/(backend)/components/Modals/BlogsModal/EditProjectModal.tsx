import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import TRForm from "@/components/forms/TRFrom";
import TRInput from "@/components/forms/TRInput";
import TRTextarea from "@/components/forms/TRTextarea";
import { useUpdatePost } from "@/hooks/posts.hook";

const EditProjectModal = ({
  setIsOpen,
  exitsData,
}: {
  setIsOpen: any;
  exitsData: any;
}) => {
  const [images, setImages] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>(exitsData.tags);
  const [tagInput, setTagInput] = useState<string>("");
  const [links, setLinks] = useState<{ label: string; url: string }[]>(
    exitsData.links,
  );

  const updateProjectMutation = useUpdatePost();

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    const projectData = {
      postId: exitsData._id,
      title: data.title,
      description: data.description,
      category: data.category,
      startDate: data.startDate || exitsData.startDate,
      endDate: data.endDate || exitsData.endDate,
      tags: tags,
      video: data.video,
      links: links,
    };

    formData.append("data", JSON.stringify(projectData));
    images.forEach((file) => {
      formData.append("files", file);
    });

    updateProjectMutation.mutate(formData);
    setIsOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
    }
  };

  const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleTagKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const newTags = tagInput
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      setTags((prevTags) => [...prevTags, ...newTags]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const handleLinkChange = (
    index: number,
    field: "label" | "url",
    value: string,
  ) => {
    const updatedLinks = [...links];

    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const addLink = () => {
    setLinks([...links, { label: "", url: "" }]);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="absolute z-50">
      <div className="fixed z-40 inset-0 bg-slate-500/35 flex flex-col w-full bg-opacity-75 justify-center items-center">
        <div className="md:max-w-[70vw] md:min-w-[40vw]">
          <div
            className="relative z-40 min-w-3xl max-w-3xl mx-auto max-h-[90vh] my-auto 
          rounded-xl p-6 overflow-hidden overflow-y-auto 
          bg-gray-900/95 text-white text-center"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <div className="space-y-2 flex flex-col">
              <h2 className="text-xl font-semibold">Update Project</h2>

              <TRForm
                defaultValues={{
                  title: exitsData.title,
                  description: exitsData.description,
                  category: exitsData.category,
                  startDate: exitsData.startDate,
                  endDate: exitsData.endDate,
                }}
                onSubmit={onSubmit}
              >
                <div className="py-3 flex gap-4">
                  <TRInput
                    isRequired
                    label="Project Title"
                    name="title"
                    type="text"
                  />
                </div>

                <div className="flex w-full py-3 gap-4 items-center">
                  <div className="mt-5 w-full">
                    <TRInput
                      isRequired
                      label="Project Category"
                      name="category"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="startDate">
                      {" "}
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        year: "numeric",
                      }).format(new Date(exitsData.startDate))}{" "}
                    </label>
                    <TRInput label="Start Date" name="startDate" type="date" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="endDate">
                      {" "}
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        year: "numeric",
                      }).format(new Date(exitsData.startDate))}{" "}
                    </label>
                    <TRInput label="End Date" name="endDate" type="date" />
                  </div>
                </div>

                <div className="py-1.5 flex gap-4">
                  <TRTextarea
                    label="Project Description"
                    name="description"
                    rows={4}
                    type="text"
                  />
                </div>

                <div className="py-1.5">
                  <Input
                    multiple
                    accept="image/*"
                    label="Project Images"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="py-1.5">
                  <label
                    className="block text-left mb-2 text-sm font-medium text-gray-300"
                    htmlFor="tech"
                  >
                    Tech
                  </label>
                  <Input
                    placeholder="Enter tech separated by commas"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyPress={handleTagKeyPress}
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-600 text-white rounded-full flex items-center"
                      >
                        {tag}
                        <button
                          className="ml-2 text-red-500"
                          onClick={() => removeTag(index)}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-left mb-2 text-sm font-medium text-gray-300"
                    htmlFor="links"
                  >
                    Project Links
                  </label>
                  {links.map((link, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        placeholder="Link Label"
                        value={link.label}
                        onChange={(e) =>
                          handleLinkChange(index, "label", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Link URL"
                        value={link.url}
                        onChange={(e) =>
                          handleLinkChange(index, "url", e.target.value)
                        }
                      />
                      <button
                        className="text-red-500 px-2"
                        onClick={() => removeLink(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <Button
                    color="success"
                    size="sm"
                    variant="bordered"
                    onClick={addLink}
                  >
                    + Add more Link
                  </Button>
                </div>

                <div className="flex mt-4 gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Add New Project
                  </Button>
                </div>
              </TRForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
