'use client'

import { PenSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ReglagesPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Réglages</h1>
            <Card className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Paramètres généraux</h2>
                    <Button variant="outline">
                        <PenSquare className="mr-2" />
                        Modifier
                    </Button>
                </div>
                <Separator className="my-4" />
                <ScrollArea className="h-64">
                    <p>Contenu des paramètres généraux...</p>
                </ScrollArea>
            </Card>
            <Card className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <Button variant="outline">
                        <PenSquare className="mr-2" />
                        Modifier
                    </Button>
                </div>
                <Separator className="my-4" />
                <ScrollArea className="h-64">
                    <p>Contenu des notifications...</p>
                </ScrollArea>
            </Card>
            <Card className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Sécurité</h2>
                    <Button variant="outline">
                        <PenSquare className="mr-2" />
                        Modifier
                    </Button>
                </div>
                <Separator className="my-4" />
                <ScrollArea className="h-64">
                    <p>Contenu de la sécurité...</p>
                </ScrollArea>
            </Card>
        </div>
    )
}