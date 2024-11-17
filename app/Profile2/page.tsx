'use client'

import { ImagePlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from 'react'

export default function ProfilPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profil Salarié</h1>
            <Card className="mb-4">
                <div className="flex items-center mb-4">
                    <ImagePlus className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Nom du Salarié</h2>
                        <p className="text-gray-600">Poste</p>
                    </div>
                </div>
                <Separator />
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Informations Personnelles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Adresse</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                        </div>
                    </div>
                </div>
                <Button className="mt-4">Mettre à jour</Button>
            </Card>
        </div>
    )
}