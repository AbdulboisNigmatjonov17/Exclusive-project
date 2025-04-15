"use client"
import React, { useState, useEffect } from 'react'
import { db } from '@/firebase'
import { doc, getDoc, setDoc } from "firebase/firestore"
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const getUserData = async () => {
    try {
      if (typeof window === "undefined") return; // SSRda localStorage yo'q
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data() as FormData);
      }
    } catch (error) {
      console.log("Ma'lumot olishda xatolik:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getUserData();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (typeof window === "undefined") return;

      let userId = localStorage.getItem("userId");
      if (!userId) {
        userId = uuidv4();
        localStorage.setItem("userId", userId);
      }

      await setDoc(doc(db, "users", userId), formData);
      alert("Ma'lumotlar saqlandi!");
      setShow(false);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className='Container pt-[80px] pb-[140px]'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Link href="/" className='font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]'>Home</Link>
          <span className='text-[14px]'>/</span>
          <h1 className='font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]'>My Account</h1>
        </div>
        <h1 className='text-sm font-normal leading-5'>
          Welcome! <span className='text-[#DB4444]'>{formData.firstName} {formData.lastName}</span>
        </h1>
      </div>

      <div className='flex items-start mt-20 gap-10'>
        <div>
          <h1 className='font-medium text-base leading-6'>Manage My Account</h1>
          <h2 className="font-normal text-base leading-6 text-[#DB4444] pt-4 pl-9">My Profile</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>Address Book</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Payment Options</h2>
          <h1 className='font-medium text-base leading-6 pt-6'>My Orders</h1>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Returns</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Cancellations</h2>
          <h2 className='font-medium text-base leading-6 pt-4'>My WishList</h2>
        </div>

        <form onSubmit={handleSubmit} className='border-2 border-[rgba(0,0,0,0.05)] w-[870px] h-[630px] rounded-[4px] py-10 px-20'>
          <div className="flex items-center justify-between">
            <h1 className='font-medium text-[20px] leading-7 text-[#DB4444]'>Edit Your Profile</h1>
            <button type="button" onClick={() => setShow(prev => !prev)} className='text-blue-500 underline cursor-pointer'>
              {show ? "View Mode" : "Edit Mode"}
            </button>
          </div>

          <div className='grid grid-cols-2'>
            <label className='flex flex-col mt-4'>
              First Name
              {show ? (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  value={formData.firstName}
                  disabled
                />
              )}
            </label>

            <label className='flex flex-col mt-4'>
              Last Name
              {show ? (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  value={formData.lastName}
                  disabled
                />
              )}
            </label>

            <label className='flex flex-col mt-4'>
              Email
              {show ? (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="email"
                  value={formData.email}
                  disabled
                />
              )}
            </label>

            <label className='flex flex-col mt-4'>
              Address
              {show ? (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                  type="text"
                  value={formData.address}
                  disabled
                />
              )}
            </label>
          </div>

          {show && (
            <div>
              <h1 className='font-normal text-base leading-6 mt-6'>Password Changes</h1>
              <input
                className='mt-2 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder='Current Password'
              />
              <input
                className='mt-7 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder='New Password'
              />
              <input
                className='mt-7 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Confirm New Password'
              />
            </div>
          )}

          <div className='text-end'>
            <button type="button" className='pr-8 mt-5 cursor-pointer' onClick={() => setShow(false)}>Cancel</button>
            {show && (
              <button
                type='submit'
                className="bg-[rgba(219,68,68,1)] py-4 px-12 rounded-[4px] text-white font-medium text-base mt-6 cursor-pointer"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
