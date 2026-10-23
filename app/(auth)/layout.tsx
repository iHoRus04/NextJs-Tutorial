"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
const navLink = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  
  return (
    <html lang="vi">
      <body>
      
          
        {navLink.map((link) =>{ 
            const isActive : boolean = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
            return <Link className={isActive ? "active" : ""} key={link.href} href={link.href}>{link.name} </Link>
          })}

        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
