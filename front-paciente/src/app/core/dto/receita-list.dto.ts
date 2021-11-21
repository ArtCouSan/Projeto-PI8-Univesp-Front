
export interface ReceitaListDTO {
    hash: string;
    status: string;
    cpfPaciente: string;
    dtInsercao: Date;
    nomeHospital: string;
    crmMedico: string;
    nomeMedico: string;
    nomeFarmacia: string;
    crfFarmaceutico: string;
    nomeFarmaceutico: string;
    showQrcode: boolean;
    qrcode: string;
}