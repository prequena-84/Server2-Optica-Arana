import { type } from "os";
import type { TIdCostumer } from "../costumer/costumer.type"; 
import type { TIdUser } from "../users/users.type";

type TIdDiagnose= number; //id Dianostico
type TIdCostumers= TIdCostumer; // id clientes
type TIdUsers= TIdUser;  // id usuario
type TSphere= number;   // Esfera
type TCylinder= number; // cilindro
type TAxis= number; // eje
type TAdd= number;  // add
type TDpn= number;  // dPn
type THeight= number; // altura
type TLensType= string;// tipo de lente
type TLensMaterial= string; // material de lente
type TFormula= string; // formula de lente
type TObservation= string;  // observaciones

export type {
    TIdDiagnose,
    TIdCostumers,
    TIdUsers,
    TSphere,
    TCylinder,
    TAxis,
    TAdd,
    TDpn,
    THeight,
    TLensType,
    TLensMaterial,
    TFormula,
    TObservation,
}