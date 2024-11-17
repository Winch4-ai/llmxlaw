'use client'

import {
    Sidebar,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarSeparator,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarInset,
    useSidebar,
  } from "@/components/ui/sidebar"
  
  
import { User, ChartNoAxesGantt, Users, PanelLeft, PenSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import Image from 'next/image';
  
// Menu items.
const items = [
{
    title: "Profile 1",
    url: "/profile1",
    icon: User,
},
{
    title: "Profile 2",
    url: "/profile2",
    icon: Users,
},
{
    title: "Mediator",
    url: "/mediator",
    icon: ChartNoAxesGantt,
},
]

export function CustomTrigger() {
    const { toggleSidebar } = useSidebar()
    
    return <button onClick={toggleSidebar}><PanelLeft className="w-6 h-6 text-[#323E48]"/></button>
}

export function AppSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

return (
    <Sidebar side="left" collapsible="icon" className="h-[calc(100vh-64px)] ">

        {/* Inset mode with icons only */}    
        <Sidebar collapsible="icon" className="transition-transform">
            <SidebarInset className="flex flex-col items-center p-4 space-y-4">
                <a href={"/"} className="p-2 hover:bg-[#D0D3D4] rounded-lg">
                    <PenSquare className="w-6 h-6 text-[#323E48]" aria-label={"New Mediation"} />
                </a>
                {items.map((item) => (
                    <a href={item.url} key={item.title} className="p-2 hover:bg-[#D0D3D4] rounded-lg">
                        <item.icon className="w-6 h-6 text-[#323E48]" aria-label={item.title}/>
                    </a>
                ))}
                <a href={"https://winch4.ai"} className="w-10 flex flex-col py-1 item-center space-y-4 hover:bg-[#D0D3D4] rounded-lg">
                        <Image src="/logotype/4.svg" width={40} height={40} alt="Logo de Winch4.ai" className="text-[#323E48] cursor-pointer" aria-label={"Winch4.ai"} />
                </a>
            </SidebarInset>
        </Sidebar>

        {/* Full Sidebar Content */}
        <Sidebar variant="sidebar" className="flex flex-col h-full p-2 transition-transform">
            
            <SidebarGroup>
                <SidebarGroupContent className="flex-grow p-2">
                    <Button className="w-full justify-start rounded-sm">
                        <a href="/" className="flex items-center">
                            <PenSquare className="mr-2 h-4 w-4" /> New Mediation
                        </a>
                    </Button>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator className="mt-4 mb-2 bg-[#D1DFDE]" />
            
            <SidebarGroup>
                <SidebarGroupLabel className="pt-2 pb-2 text-sm font-semibold text-center text-[#323E48]">Accueil</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem  className="pl-4" key={item.title}>
                                <SidebarMenuButton asChild className="hover:bg-[#D0D3D4]">
                                    <a href={item.url} >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarSeparator className="mt-4 mb-2 bg-[#D1DFDE] --primary" />

            <SidebarFooter className="mt-auto mx-auto px-4 py-2 text-center hover:bg-[#D0D3D4] rounded-lg flex items-center justify-center">
                <SidebarSeparator className="mt-4 mb-4 bg-[#D1DFDE]" />
                <a href="https://winch4.ai">
                    <img src={"/logotype/winch4ai.png"} alt="Logo de Winch4.ai"/>
                </a>
            </SidebarFooter>

        </Sidebar>
    </Sidebar>
)
}