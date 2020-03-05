export class Reservation{
    constructor(
        public user_nom: String,
        public prenom: String,
        public telephone: String,
        public email: String,
        public user_adresse: String,
        public date_de_debut: Date,
        public date_de_fin: Date

    ){

    }

}