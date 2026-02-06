"use client"

import type React from "react"
import * as Form from "@radix-ui/react-form"

interface SignUpCardProps {
  formData: {
    name: string
    email: string
    phone: string
    city: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function SignUpCard({ formData, onChange, onSubmit }: SignUpCardProps) {
  return (
    <Form.Root onSubmit={onSubmit}>
      <div className=" bg-[#202020] rounded-2xl p-8 shadow-lg w-[90%] md:w-[70%] lg:w-[60%] mx-auto">

        <h3 className="text-md md:text-2xl mb-6 text-white font-semibold">Register Now</h3>

        <div className="space-y-5">

          {/* Name */}
          <Form.Field name="name">
            <Form.Control asChild>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={onChange}
                className="w-full px-4 py-3 bg-[#363636] rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </Form.Control>
          </Form.Field>

          {/* Email */}
          <Form.Field name="email">
            <Form.Control asChild>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-4 py-3 bg-[#363636] rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </Form.Control>
          </Form.Field>

          {/* Phone */}
          <Form.Field name="phone">
            <Form.Control asChild>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={onChange}
                className="w-full px-4 py-3 bg-[#363636] rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </Form.Control>
          </Form.Field>

          {/* City */}
          <Form.Field name="city">
            <Form.Control asChild>
              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={onChange}
                className="w-full px-4 py-3 bg-[#363636] rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </Form.Control>
          </Form.Field>

          {/* Submit */}
          <Form.Submit asChild>
          <button
  type="submit"

  className="w-full text-white  font-poppinsfont-semibold py-3 rounded-full transition disabled:opacity-50"
  style={{
    backgroundColor: "#957AE4",
   
    fontSize: "16px",
  }}
>
 

Submit
</button>
          </Form.Submit>

        </div>
      </div>
    </Form.Root>
  )
}
