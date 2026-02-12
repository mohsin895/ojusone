"use client"

import type React from "react"
import * as Form from "@radix-ui/react-form"

interface SignUpCardProps {
  formData: {
    name: string
    email: string
    phone: string
    message: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
    successMsg?: string
}

export default function SignUpCard({ formData, onChange, onSubmit, successMsg }: SignUpCardProps) {
  return (
    <Form.Root onSubmit={onSubmit}>
      <div className="bg-[#202020] rounded-2xl p-4 shadow-lg w-[100%] md:w-[70%] lg:w-[60%] mx-auto">

        <h3 className="text-md md:text-[18px] mb-6 text-white font-normal">Get in touch to get the ball
            rolling</h3>

        <div className="space-y-5">

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
            <Form.Field name="message">
                <Form.Control asChild>
    <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={onChange}
        className="w-full px-4 py-3 bg-[#363636] rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 h-28"
        required
    />
                </Form.Control>
            </Form.Field>


          <Form.Submit asChild>
            <button
              type="submit"
              className="w-full text-white font-poppins font-semibold py-3 rounded-full transition disabled:opacity-50"
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
