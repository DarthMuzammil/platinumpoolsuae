"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Lightbox } from "react-modal-image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function LandingPageComponent() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the form data to your server
  }

  const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    (<div className="min-h-screen flex flex-col">
      <header
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">PlatinumPoolsUAE</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-neutral-950/80 text-neutral-950/60 dark:hover:text-neutral-50/80 dark:text-neutral-50/60"
                href="#services">Services</a>
              <a
                className="transition-colors hover:text-neutral-950/80 text-neutral-950/60 dark:hover:text-neutral-50/80 dark:text-neutral-50/60"
                href="#gallery">Gallery</a>
              <a
                className="transition-colors hover:text-neutral-950/80 text-neutral-950/60 dark:hover:text-neutral-50/80 dark:text-neutral-50/60"
                href="#contact">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crystal Clear Pools, Every Time
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Expert pool cleaning services in UAE. We keep your pool sparkling clean and ready for a swim.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get a Free Quote</Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              We offer a range of pool cleaning and maintenance services to keep your pool in perfect condition.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-2">Regular Cleaning</h3>
                <p className="text-gray-600 dark:text-gray-300">Weekly or bi-weekly cleaning to keep your pool pristine.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
                <p className="text-gray-600 dark:text-gray-300">Thorough cleaning and scrubbing of all pool surfaces.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-2">Water Testing</h3>
                <p className="text-gray-600 dark:text-gray-300">Regular water quality checks and chemical balancing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Pool cleaning before and after ${index + 1}`}
                  className="w-full h-auto object-cover cursor-pointer rounded-lg"
                  onClick={() => setLightboxImage(src)} />
              ))}
            </div>
            {lightboxImage && (
              <Lightbox
                medium={lightboxImage}
                large={lightboxImage}
                alt="Gallery image"
                onClose={() => setLightboxImage(null)} />
            )}
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Get in touch with us for any inquiries or to schedule a pool cleaning service.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center"><span className="font-bold mr-2">Email:</span> info@platinumpoolsuae.com</p>
                  <p className="flex items-center"><span className="font-bold mr-2">Phone:</span> +971 50 123 4567</p>
                  <p className="flex items-center"><span className="font-bold mr-2">Address:</span> Dubai, UAE</p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                    <Facebook className="h-6 w-6" aria-label="Facebook" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                    <Instagram className="h-6 w-6" aria-label="Instagram" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                    <Twitter className="h-6 w-6" aria-label="Twitter" />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register(
                        "name",
                        { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } }
                      )}
                      aria-label="Your Name" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register(
                        "email",
                        { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }
                      )}
                      aria-label="Your Email" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      {...register(
                        "message",
                        { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } }
                      )}
                      aria-label="Your Message" />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; 2023 PlatinumPoolsUAE. All rights reserved.</p>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>)
  );
}