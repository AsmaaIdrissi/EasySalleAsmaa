export class Salle{

    constructor(
       public id:string,
        public name: string,
        public voie: string,
        public ville: string,
        public codePostale: string,
        public capacite: string,
        public type_evenemment: string,
        public servicePropose: string,
        public  description: string,
        public disponibilite: string,
        public picture: string
    ){

    }
}