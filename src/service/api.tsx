import axios from "axios";
export const api = axios.create({
    baseURL:'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
})
// essa pasta esta pegando os dados de uma api externa.