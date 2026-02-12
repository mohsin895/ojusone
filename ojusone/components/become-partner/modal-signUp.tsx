"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"

interface SignUpCardModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  formData: {
    name: string
    email: string
    phone: string
    city: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function SignUpCardModal({ 
  isOpen, 
  onOpenChange, 
  formData, 
  onChange, 
  onSubmit 
}: SignUpCardModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay with high z-index */}
        <Dialog.Overlay 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          style={{ zIndex: 9999 }}
        />
        
        {/* Modal Content with higher z-index */}
        <Dialog.Content 
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ zIndex: 10000 }}
        >
          <Form.Root onSubmit={onSubmit}>
            <div className="bg-[#202020] rounded-xl p-8 shadow-lg mx-4">
              <div className="flex justify-between items-center mb-6">
                <Dialog.Title className="text-2xl font-semibold text-card-foreground">
                  Sign Up
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </Dialog.Close>
              </div>

              <div className="space-y-5">
                {/* Name Field */}
                <Form.Field name="name">
                  <div className="flex flex-col space-y-2">
                    <Form.Control asChild>
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 bg-[#363636] border border-border rounded-lg text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                {/* Email Field */}
                <Form.Field name="email">
                  <div className="flex flex-col space-y-2">
                    <Form.Control asChild>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 bg-[#363636] border border-border rounded-lg text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                {/* Phone Field */}
                <Form.Field name="phone">
                  <div className="flex flex-col space-y-2">
                    <Form.Control asChild>
                      <input
                        type="tel"
                        placeholder="Phone No"
                        value={formData.phone}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 bg-[#363636] border border-border rounded-lg text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                {/* City Field */}
                <Form.Field name="city">
                  <div className="flex flex-col space-y-2">
                    <Form.Control asChild>
                      <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 bg-[#363636] border border-border rounded-lg text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                {/* Submit Button */}
                <Form.Submit asChild>
                  <button className="w-full px-6 cursor-pointer py-3 mt-6 bg-white text-background font-semibold rounded-lg hover:bg-gray-100 transition-colors active:scale-95 transform duration-100">
                    Submit
                  </button>
                </Form.Submit>
              </div>
            </div>
          </Form.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}