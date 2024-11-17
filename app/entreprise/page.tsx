'use client'

import { PenSquare, ImagePlus, FileText, Sparkles, Paperclip, Globe, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function EntrepriseProfile() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Profil Entreprise</h1>
                <Button variant="outline">
                    <PenSquare className="mr-2" /> Modifier Profil
                </Button>
            </div>
            <Card className="mb-4">
                <div className="flex items-center">
                    <ImagePlus className="w-16 h-16 mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Nom de l'Entreprise</h2>
                        <p className="text-gray-600">Secteur d'activité</p>
                    </div>
                </div>
            </Card>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                    <h3 className="text-lg font-semibold mb-2">Informations Générales</h3>
                    <p><Globe className="inline mr-2" /> Site Web: <a href="#" className="text-blue-600">www.entreprise.com</a></p>
                    <p><Paperclip className="inline mr-2" /> Adresse: 123 Rue de l'Entreprise, Ville, Pays</p>
                    <p><FileText className="inline mr-2" /> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Card>
                <Card>
                    <h3 className="text-lg font-semibold mb-2">Projets Récents</h3>
                    <ScrollArea className="h-32">
                        <ul>
                            <li className="mb-2"><Sparkles className="inline mr-2" /> Projet 1</li>
                            <li className="mb-2"><Sparkles className="inline mr-2" /> Projet 2</li>
                            <li className="mb-2"><Sparkles className="inline mr-2" /> Projet 3</li>
                        </ul>
                    </ScrollArea>
                </Card>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-end">
                <Button variant="default">
                    <ArrowUp className="mr-2" /> Enregistrer les modifications
                </Button>
            </div>
        </div>
    )
}