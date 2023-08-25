import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { LoginUser } from '../services/auth/auth';
import {useNavigate}  from 'react-router-dom';
import {Link} from 'react-router-dom';
const Login = () => {
 const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const user = await LoginUser(values.email,values.password)
      console.log(user.data);
       if (user) {
        message.success("Giriş işlemi başarılı.")
        localStorage.setItem('user',JSON.stringify(user.data))
        navigate('/')
       }
    } catch (error) {
       message.error("Giriş işlemi başarısız oldu.")
    }
  };

  return (
    <div className='bg-gray-800 w-full h-screen flex flex-col items-center justify-center'>
      <Form
       layout='vertical'
      className=' sm:w-1/2 w-full h-1/2  p-5 rounded-md'
        name="register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >

    <Form.Item
      label={<label className="text-white">Password</label>}
      name ="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
        name={"email"}
        label={<label className="text-white">E-mail</label>}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Button className='bg-orange-500 w-full' type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
    <div>
      <Link to="/register" className='text-white tracking-widest sm:text-xl text-sm capitalize'>Dont have an account, <span className='text-red-500 font-bold uppercase border-y-2 border-red-600 pb-1'>sign up</span></Link>
    </div>
    </div>
  )
}

export default Login