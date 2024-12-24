"use client";

import { MailIcon } from "@/components/forms/icons/MailIcons";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function ContactForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can send formData to an API here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <form className="space-y-10 max-w-xl" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <Input
            name="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Full name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="you@example.com"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <Input
          name="subject"
          label="Subject"
          labelPlacement="outside"
          placeholder="Subject...."
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
        />
        <Textarea
          name="message"
          label="Message"
          labelPlacement="outside"
          placeholder="Your Message...."
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="shadow" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
