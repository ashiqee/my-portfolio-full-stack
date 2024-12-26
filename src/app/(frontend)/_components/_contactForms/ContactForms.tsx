"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

import { MailIcon } from "@/components/forms/icons/MailIcons";

export default function ContactForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      <form
        className="space-y-10 relative z-30 max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-4">
          <Input
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Full name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            labelPlacement="outside"
            name="email"
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
          label="Subject"
          labelPlacement="outside"
          name="subject"
          placeholder="Subject...."
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
        />
        <Textarea
          label="Message"
          labelPlacement="outside"
          name="message"
          placeholder="Your Message...."
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
        />
        <Button color="primary" type="submit" variant="shadow">
          Submit
        </Button>
      </form>
    </>
  );
}
