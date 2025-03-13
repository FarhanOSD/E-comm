import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const [currentState, setcurrentState] = useState('Login')

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  
  const [name,setName] = useState('')
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (currentState === 'Signup') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }

    } catch (error) {
      
      console.error('Error:', error);
      toast.error('Server Error')
    }
    
  }
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col it w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-200"
    >
      <div className="inline-flex items-center gap-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-300" />
      </div>
      {currentState === 'Login' ? (
        ''
      ) : (
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-t-gray-300"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-t-gray-300"
        placeholder="Email"
        required
      />

      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-t-gray-300"
        placeholder="password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer ">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p
            className="cursor-pointer "
            onClick={() => setcurrentState('Signup')}
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer "
            onClick={() => setcurrentState('Login')}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-slate-200 text-gray-600 font-light px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Sign In' : 'Signup'}
      </button>
    </form>
  );
}

export default Login