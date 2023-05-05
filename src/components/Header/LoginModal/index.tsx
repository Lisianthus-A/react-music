import { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { emailLogin, phoneLogin } from '@/apis/login';
import { replaceHttpToHttps as rp } from '@/utils';

interface Props {
    onCancel: (...args: any[]) => void;
    setUserInfo: (...args: any[]) => void;
}

// 表单布局
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 18, span: 4 }
};

function ModalView({ onCancel, setUserInfo }: Props) {
    // 是否登录中
    const [confirmLoading, setConfirmLoading] = useState(false);

    // 登录
    const onFinish = async (values: Record<string, string>) => {
        const { username, password } = values;
        // 无效输入
        if (!username || !password) {
            return;
        }

        // 登录类型
        let loginType: 'email' | 'phone';
        if (/^[\w-.]+@[\w-.]+\.\w+$/.test(username)) {
            loginType = 'email';
        } else if (/^1[3-9]\d{9}$/.test(username)) {
            loginType = 'phone';
        } else {
            return;
        }

        // 登录中
        if (confirmLoading) {
            return;
        }
        setConfirmLoading(true);

        const res = loginType === 'email'
            ? await emailLogin(username, password)
            : await phoneLogin(username, password);

        // 昵称
        window.localStorage.setItem('username', res.profile.nickname);
        // 头像
        window.localStorage.setItem('avatar', rp(res.profile.avatarUrl));
        // 用户 id
        window.localStorage.setItem('userid', res.account.id);
        // token
        window.localStorage.setItem('token', res.token);
        // token 过期时间
        const maxAge = Number(res.cookie.match(/MUSIC_U=\w+;\s?Max-Age=(\d+)/)[1]);
        window.localStorage.setItem('timestampBefore', String(Date.now() + maxAge * 1000));

        setUserInfo({
            name: res.profile.nickname,
            avatar: rp(res.profile.avatarUrl),
        });

        onCancel();
    }

    return (
        <Modal title='登录' visible={true} onCancel={onCancel} footer={null}>
            <Form {...layout} onFinish={onFinish}>
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder='输入手机号或邮箱' />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input type='password' placeholder='输入密码' autoComplete="on" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit' loading={confirmLoading}>登录</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalView;