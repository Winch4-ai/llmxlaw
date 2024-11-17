export * from './chat';

// Type représentant un message unique dans le cadre d'une interaction IA
export type message = {
    id: string;                     // Identifiant unique du message (UUID)
    senderRole: "user" | "assistant" | "system"; // Rôle de l'expéditeur
    content: string;                // Contenu du message
    timestamp: Date;                // Date et heure d'envoi du message
    metadata?: string;                   // Métadonnées pour informations additionnelles
};
  
// Type représentant un ensemble de messages pour l'historique d'une conversation IA
export type chat = {
    conversationId: string;            // Identifiant unique de la conversation
    messages: message[];               // Liste des messages de la conversation
    participants: {                    // Informations sur les participants
      userId: string;                  // Identifiant de l'utilisateur
      assistantId: string;             // Identifiant de l'assistant IA
    };
    context?: {                        // Contexte de la conversation
      title: string;
      topic: string;                   // Sujet ou domaine de la conversation
      sessionId?: string;              // Identifiant de la session de chat en cours
    };
    lastUpdated: Date;                 // Date et heure de la dernière mise à jour de l'historique
};

export class ChatManager {
    private messageHistory: chat;

    constructor(conversationId: string, userId: string, assistantId: string, title: string, topic: string) {
        this.messageHistory = {
            conversationId,
            messages: [],
            participants: {
                userId,
                assistantId,
            },
            context: {
                title,
                topic,
            },
            lastUpdated: new Date(),
        };
    }

    addMessage(senderRole: "user" | "assistant" | "system", content: string, metadata: message['metadata'] = undefined) {
        const newMessage: message = {
            id: this.generateUUID(),
            senderRole,
            content,
            timestamp: new Date(),
            metadata: metadata || undefined,
        };

        this.messageHistory.messages.push(newMessage);
        this.messageHistory.lastUpdated = new Date();
    }

    private generateUUID(): string {
        // Simple UUID generator for example purposes
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getMessageHistory(): chat {
        return this.messageHistory;
    }
}