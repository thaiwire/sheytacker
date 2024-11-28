import React from "react";
import { Form, Input, Button } from "antd";
import Link from "antd/es/typography/Link";
import Divider from "../../components/Divider";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white">Shey TWP TACKER</h1>
        <span className="text-white mt-5">one Stop for TWP Member Records</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="text-2xl">Login to Accout TWP</h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            <div className="flex justify-center mt-5">
              Don't have an account? <Link href="/register">Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
