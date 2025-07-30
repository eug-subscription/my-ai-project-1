'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@heroui/react'

export function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">AI Food Photo Enhancer</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/enhance" aria-current="page">
            Enhance Photos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/auth/signin">Sign In</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/auth/signup" className="bg-primary text-white px-4 py-2 rounded-lg">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}