export class Salle{

    constructor(
        public _id: string,
        public nom: string,
        public voie: string,
        public ville: string,
        public code_postal: string,
        public capacite: string,
        public type_evenement: string,
        public services_proposes: string,
        public  description: string,
        public disponibilite: string,
        public image: string
    ){

    }
}