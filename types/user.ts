export * from './user';

export interface User {
    id: number;
    name: string;
    email: string;
    companyId?: number; // Lien optionnel vers l'entreprise
    role?: string; // Ex: "admin", "user"
    avatarUrl?: string; // URL de l'avatar de l'utilisateur
    preferences?: Record<string, any>; // Stocker des préférences spécifiques
}

export interface Company {
    id: number;
    name: string;
    address: string;
    industry?: string; // Secteur d'activité
    website?: string; // URL du site web de l'entreprise
    users?: User[]; // Lien optionnel vers les utilisateurs de l'entreprise
}
export class UserClass implements User {
    id: number;
    name: string;
    email: string;
    companyId?: number;
    role?: string;
    avatarUrl?: string;
    preferences?: Record<string, any>;

    constructor(id: number, name: string, email: string, companyId?: number, role?: string, avatarUrl?: string, preferences?: Record<string, any>) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.companyId = companyId;
        this.role = role;
        this.avatarUrl = avatarUrl;
        this.preferences = preferences;
    }
}

export class CompanyClass implements Company {
    id: number;
    name: string;
    address: string;
    industry?: string;
    website?: string;
    users?: User[];

    constructor(id: number, name: string, address: string, industry?: string, website?: string, users?: User[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.industry = industry;
        this.website = website;
        this.users = users || [];
    }

    addUser(user: User) {
        if (!this.users) {
            this.users = [];
        }
        this.users.push(user);
    }
}