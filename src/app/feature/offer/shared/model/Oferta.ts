import { Usuario } from "@user/shared/model/usuario";
import { Contacto } from "@contact/shared/model/contacto";
import { PostDetalles } from "@post-details/shared/model/post-detalles";

export interface Oferta {
    usuario: Usuario;
    postDetalles: PostDetalles;
    contacto: Contacto;
    estaActiva: boolean;
    tags: string[];
}