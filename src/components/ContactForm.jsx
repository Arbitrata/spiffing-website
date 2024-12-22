import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";

export default function ContactForm() {
  const services = [
    {
      id: 1,
      label: "Event Management",
      value: "Event Management",
    },
    {
      id: 2,
      label: "Event Supplies",
      value: "Event Supplies",
    },
    {
      id: 3,
      label: "Experiential Marketing",
      value: "Experiential Marketing",
    },
  ];

  const { Option } = Select;

  const [selectedService, setSelectedService] = useState();

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  const onFinish = (values) => {
    message.success("Submitting...");
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [setResult] = React.useState("");

  const onSubmit = async (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append("access_key", "key");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        message.success("Form Submitted Successfully!");
      } else {
        message.error("An error occurred. Please try again!");
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again!");
    }
  };

  return (
    <div className="w-full md:px-[45px] px-2 space-y-4">
      <Form
        onSubmit={onSubmit}
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        className="font-semibold"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 w-full md:space-x-4">
          <Form.Item
            label="First Name"
            name="firstname"
            type="text"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input
              style={{ height: "45px", width: "100%" }}
              size="large"
              placeholder="Joe"
            />
          </Form.Item>
          <Form.Item
            label="Second Name"
            name="secondname"
            type="text"
            rules={[
              {
                required: true,
                message: "Please input your secondname!",
              },
            ]}
          >
            <Input style={{ height: "45px" }} size="large" placeholder="doe" />
          </Form.Item>
        </div>

        <Form.Item
          label="Email"
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            style={{ height: "45px" }}
            size="large"
            placeholder="name@gmail.com"
          />
        </Form.Item>
        <Form.Item
          label="Select a Service"
          name="Service"
          type="select"
          rules={[
            {
              required: true,
              message: "Please select a Service!",
            },
          ]}
        >
          <Select
            style={{ width: "100%", height: "45px" }}
            size="large"
            onChange={handleServiceChange}
            value={selectedService || "Request a quote"}
          >
            {services.map((service) => (
              <Option key={service.id} value={service.value}>
                {service.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please input a message!",
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Typing..." maxLength={1000} />
        </Form.Item>
        <div className="flex w-full mt-8">
          <Button
            type="secondary"
            size="large"
            htmlType="submit"
            className="w-full h-10 bg-darkGreen font-bold text-white text-[14px]"
          >
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
