import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { emailLogin, phoneLogin } from 'Apis/login';

//布局
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 18, span: 4 }
};

const ModalView = ({ visible, onClose, onSetName, onSetImg }) => {
    //提交
    const onFinish = async (values) => {
        const { username, password } = values;
        if (!username || !password) {  //无效输入
            return;
        }

        let loginType;  //登录类型
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(username)) {  //输入的账号是邮箱
            loginType = 'email';
        } else if (/^1[3-9]\d{9}$/.test(username)) {  //手机号
            loginType = 'phone';
        } else {
            return;
        }

        const result = loginType === 'email'
            ? await emailLogin(username, password)
            : await phoneLogin(username, password);

        //昵称 头像地址 
        const { nickname, avatarUrl } = result.profile;
        //用户 id
        const { id } = result.account;
        //token
        const { token } = result;
        //token 过期时间
        const maxAge = +result.cookie.match(/MUSIC_U=\w+;\s?Max-Age=(\d+)/)[1];


        onSetName(nickname);
        onSetImg(avatarUrl);
        window.localStorage.setItem('username', nickname);
        window.localStorage.setItem('avatar', avatarUrl);
        window.localStorage.setItem('userid', id);

        //js 无法访问到 document.cookie，所以将 token 存入 localStorage
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('timestampBefore', Date.now() + maxAge * 1000);

        onClose();
    }

    return (
        <Modal title='登录' visible={visible} onCancel={onClose} footer={null}>
            <Form {...layout} onFinish={onFinish}>
                <Form.Item label="账号" name="username">
                    <Input placeholder='输入手机号或邮箱' />
                </Form.Item>

                <Form.Item label="密码" name="password">
                    <Input type='password' placeholder='输入密码' autoComplete="on" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>登录</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalView;