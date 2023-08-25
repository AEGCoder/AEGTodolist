import React from 'react'
import { Button, Form, Input, message } from 'antd';
import {RegisterUser} from '../services/auth/auth'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Register = () => {
 const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const res = await RegisterUser(values.username,values.email,values.password)
      if(res.status === 200){
        message.success("Kayıt işlemi başarılı.")
        navigate('/login')
      }
    } catch (error) {
      message.error("Kayıt işlemi başarısız oldu.")
    }
  };

  return (
    <div className='bg-gray-800  w-full h-screen flex flex-col items-center justify-center'>
      <Form
       layout='vertical'
      className=' sm:w-1/2 w-full h-1/ p-3'
        name="register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >

<Form.Item
      label={<label className="text-white">Username</label>}
      name={"username"}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={<label className="text-white">Password</label>}
      name="password"
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
        Register
      </Button>
    </Form>
    <div>
      <Link to="/login" className='text-white tracking-widest sm:text-xl text-sm capitalize'>If you have an account, <span className='text-red-500 font-bold uppercase border-y-2 border-red-600 pb-1'>SING IN</span></Link>
    </div>
    </div>
  )
}

export default Register