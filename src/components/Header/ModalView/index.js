import React from 'react';
import { Form, Input, Button } from 'antd';

//布局
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}
const tailLayout = {
    wrapperCol: { offset: 18, span: 4 }
}

const onFinish = (values) => {
    console.log(values);
}

const ModalView = () => {
    return (
        <Form
            {...layout}
            onFinish={onFinish}
        >
            <Form.Item
                label="账号"
                name="username"
            >
                <Input placeholder='输入手机号或邮箱' />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
            >
                <Input type='password' placeholder='输入密码' />
            </Form.Item>

            <Form.Item
                {...tailLayout}
            >
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    登录
                 </Button>
            </Form.Item>
        </Form>
    );
}

export default ModalView;