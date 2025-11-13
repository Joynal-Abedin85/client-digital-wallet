import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useForm } from "react-hook-form"

import { z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod'


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const formschema = z.object({
  username: z.string().min(2).max(50),
  email: z.email(),
  password: z.string().min(4),
  confirmPassword: z.string()
}).refine((data)  => data.password === data.confirmPassword ,{
  message: "pass is not match",
  path: ["confirmPassword"]
})

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {


   const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""

    }
  })

  const onSubmit = (data: z.infer<typeof formschema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm">
            Fill in the form below to create your account
          </p>
        </div>

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        
       

      
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="m@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We'll use this to contact you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

       
      {/* Password Field */}
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...field}
                />
              </FormControl>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <FormDescription>Must be at least 8 characters long.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Confirm Password Field */}
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  {...field}
                />
              </FormControl>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <FormDescription>Please confirm your password.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

        <Button type="submit">Create Account</Button>

        <div className="text-center text-sm text-muted-foreground">Or continue with</div>

        <Button variant="outline" type="button">
          Sign up with GitHub
        </Button>

        <p className="text-center text-sm">
          Already have an account? <a href="#" className="underline">Sign in</a>
        </p>
      </form>
    </Form>
  )
}
