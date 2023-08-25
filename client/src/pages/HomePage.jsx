import React from "react";
import Header from "../components/Header";
import { Input, Form, message, Button } from "antd";
import { addTodo } from "../services/todos/todo";
const HomePage = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      const todo = await addTodo(values.title, values.description);
      form.resetFields();
      message.success("Add Todo Success");
    } catch (error) {
      console.log(error);
      message.error("Add Todo Failed");
    }
  };

  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center mt-10 gap-y-5 w-full">
        <h1 className="text-white lg:text-7xl md:text-5xl text-3xl font-bold tracking-wider uppercase">
          Just do it
        </h1>
        <Form
        form = {form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="flex flex-col items-center gap-y-5 w-full p-3"
        >
          <Form.Item
            name={"title"}
            rules={[{ required: true, message: "Please input your title!" }]}
            className="sm:w-[25rem] w-full"
          >
            <Input placeholder="title" className="rounded-full  py-2 pl-4" />
          </Form.Item>

          <Form.Item
            className="sm:w-[25rem] w-full h-full"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea className="h-[10rem]" showCount />
          </Form.Item>

          <Button
            htmlType="submit"
            className="text-white w-[20rem]  p-1 rounded-lg flex items-center justify-center text-xl tracking-wider font-medium hover:text-yellow-500 transition-all duration-300 shadow-md shadow-white"
          >
            Task Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;
