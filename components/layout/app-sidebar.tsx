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

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
  
import { User, MessageCircleQuestion, Building2,  MoreHorizontal, History, PanelLeft, Settings, PenSquare, ChevronDown } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import Image from 'next/image';
  
// Menu items.
const items = [
{
    title: "Profil",
    url: "/profil",
    icon: User,
},
{
    title: "Entreprise",
    url: "/entreprise",
    icon: Building2,
},
{
    title: "Aide",
    url: "/aide",
    icon: MessageCircleQuestion,
},
{
    title: "Réglages",
    url: "/reglages",
    icon: Settings,
},
]

const historique = [
    "Comprendre les biais de l'IA : Un Guide",
    "GPT-4 vs ChatGPT : Quelle est la différence ?",
    "L'avenir des assistants vocaux",
    "Exploration des Chatbots en Santé",
    "Ethique et IA : Défis et Solutions",
    "Comment l'IA transforme l'éducation",
    "IA et créativité : peut-on vraiment collaborer ?",
    "Automatisation des tâches avec l'IA",
    "Les bases du Machine Learning pour débutants",
    "Meilleures pratiques pour entraîner un modèle GPT",
    "L'IA dans les véhicules autonomes : Que faut-il savoir ?",
    "Peut-on faire confiance aux recommandations d'une IA ?",
    "Les nouveautés de la vision par ordinateur",
    "Les dangers des deepfakes et comment les éviter",
    "Qu'est-ce que le reinforcement learning ?",
    "Les meilleurs outils pour créer un chatbot",
    "L'impact de l'IA sur le monde du travail",
    "Introduction aux réseaux de neurones convolutifs",
    "L'IA dans la finance : Tendances et innovations",
    "Sécurité et confidentialité des données dans l'IA"
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
                    <PenSquare className="w-6 h-6 text-[#323E48]" aria-label={"Nouveau Chat"} />
                </a>
                {items.map((item) => (
                    <a href={item.url} key={item.title} className="p-2 hover:bg-[#D0D3D4] rounded-lg">
                        <item.icon className="w-6 h-6 text-[#323E48]" aria-label={item.title}/>
                    </a>
                ))}
                <a href={"#"} className="p-2 hover:bg-[#D0D3D4] rounded-lg">
                        <History className="w-6 h-6 text-[#323E48]" aria-label={"Historique"} />
                </a>
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
                            <PenSquare className="mr-2 h-4 w-4" /> Nouveau Chat
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
        
            <SidebarGroup>
                <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger className="hover:bg-[#D0D3D4] flex items-center justify-between">
                        <p className="pt-2 pb-2 text-sm font-semibold text-[#323E48]">Historique</p>
                        <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <SidebarGroupContent className="h-40 overflow-y-auto">
                    <CollapsibleContent className="">
                        <ScrollArea >
                            <div className="space-y-1 text-[#323E48]">
                                {historique.map((item, i) => (
                                    <div key={i} className="flex p-1 font-medium text-xs rounded-sm hover:bg-[#D0D3D4] cursor-pointer">
                                        <span className="flex-1">
                                            {item.length > 25 ? item.slice(0, 25) + '...' : item}
                                        </span>

                                        {/* Dropdown menu for each item */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild className="">
                                                <button className="ml-auto p-1">
                                                <MoreHorizontal className="w-3 h-3"/>
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent side="right" align="start">
                                                <DropdownMenuItem>
                                                <span>Partager</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                <span>Supprimer</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CollapsibleContent>
                </SidebarGroupContent>
                </Collapsible>
                </SidebarGroup>

            <SidebarSeparator className="mt-4 mb-2 bg-[#D1DFDE]" />

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