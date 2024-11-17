'use client'

import { Menu, Search, PenSquare, Grid, ImagePlus, FileText, Sparkles, PenLine, MoreHorizontal, Paperclip, Globe, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import ChatInterface from '@/components/chat/chat_accueil'
import AccueilChat from '@/components/chat/chat_accueil'

export default function AidePage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Aide</h1>
            <Card className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Envoyer une demande d'aide</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="subject">Sujet</label>
                        <input type="text" id="subject" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                        <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
                    </div>
                    <Button type="submit">Envoyer</Button>
                </form>
            </Card>
            <Separator className="my-4" />
            <ScrollArea className="h-64">
                <AccueilChat />
            </ScrollArea>
        </div>
    )
}
