import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Text, Title, Link } = Typography;

export default function LoginPage() {

    return (
        <div className="h-full flex justify-center">
            <section className="flex items-center h-screen py-0 md:py-10">
                <div className="mx-auto p-6 sm:p-10 bg-white shadow-md rounded-lg w-96">
                    <div className="mb-8 text-center">
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto mb-4"
                        >
                            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
                            <path d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z" fill="white" />
                            <path d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z" fill="white" />
                            <path d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z" fill="white" />
                        </svg>
                        <Title level={3} className="text-lg sm:text-2xl">Sign In</Title>
                        <Text className="text-gray-500">
                            Welcome back MindX's Student! Please enter your details below to sign in.
                        </Text>
                    </div>
                    <Form
                        name="normal_login"
                        initialValues={{ remember: true }}
                        layout="vertical"
                        requiredMark="optional"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { type: "email", required: true, message: "Please input your Email!" },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                                className="border-gray-300"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: "Please input your Password!" },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder={'Password'}
                                className="border-gray-300"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>{'Remember me'}</Checkbox>
                            </Form.Item>
                            <a className="float-right text-blue-500" href="#">
                                {'Forgot password?'}
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="w-full">
                                {'Log in'}
                            </Button>
                            <div className="mt-4 text-center">
                                <Text className="text-gray-500">{"Don't have an account?"}</Text>{" "}
                                <Link href="#" className="text-blue-500">Sig up now</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );
}
