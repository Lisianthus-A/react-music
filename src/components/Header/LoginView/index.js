import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { login } from '../../../apis/apiHeader';

//布局
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}
const tailLayout = {
    wrapperCol: { offset: 18, span: 4 }
}

const ModalView = (props) => {
    const { visible, onClose, onSetName, onSetImg } = props;

    //提交
    const onFinish = async (values) => {
        const { username, password } = values;
        let data = null;
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(username)) {  //输入的用户名是邮箱
            data = {
                email: username,
                password
            }
        } else if (/^1[3-9]\d{9}$/.test(username)) {  //手机号
            data = {
                phone: username,
                password
            }
        } else {  //无效的输入
            return;
        }
        const result = await login(data);
        // console.log(result);

        onSetName(result.profile.nickname);
        onSetImg(result.profile.avatarUrl);
        window.localStorage.setItem('username', result.profile.nickname);
        window.localStorage.setItem('avatar', result.profile.avatarUrl);
        onClose();

    }

    return (
        <Modal
            title='登录'
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
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
                    <Input type='password' placeholder='输入密码' autoComplete="on" />
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
        </Modal>
    );
}

export default ModalView;