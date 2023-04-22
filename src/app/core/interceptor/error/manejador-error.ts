import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { AlertaService } from "@core/service/alerta.service";
import { HTTP_CODIGOS_ERROR } from "./http-codigos-error";


const ERROR = 'error';

@Injectable()
export class ManejadorError implements ErrorHandler {
    
    constructor(private alertaService: AlertaService) { }


    handleError(error: any): void {
        this.procesarError(error);
    }


    private procesarError(error: any) {
        if(error !== undefined) {
            let tituloError = this.obtenerTituloError(error);
            this.mostrarAlertaError(tituloError, error);
        }
    }


    private obtenerTituloError(error: any): string {

        if(error.hasOwnProperty(ERROR)) {
            return this.obtenerTituloErrorPorCodigo(error.status);
        }

        if(error instanceof HttpErrorResponse) {

            if(!this.hayConexion()) {
                return HTTP_CODIGOS_ERROR.SIN_INTERNET;
            }
        }
        
        return error
    }

    private obtenerTituloErrorPorCodigo(errorStatus: number) {

        if(this.hayErrorPorCodigo(errorStatus)) {
            return HTTP_CODIGOS_ERROR[errorStatus];
        }

        return HTTP_CODIGOS_ERROR.PETICIÓN_FALLIDA;
    }

    private mostrarAlertaError(tituloError: string, error: any) {

        if(tituloError == HTTP_CODIGOS_ERROR.SIN_INTERNET ||
            !error.hasOwnProperty(ERROR) || error.error === null) {

            this.alertaService.error(tituloError, tituloError);
            return;
        }

        console.log("ERROR " + error)
        this.alertaService.error(tituloError, error.error.excepcionMensaje);
    }

    private obtenerRespuesta(mensaje) {
        return {
          fecha: new Date().toLocaleString(),
          path: window.location.href,
          mensaje,
        };
    }


    private hayConexion(): boolean {
        return navigator.onLine;
    }

    private hayErrorPorCodigo(codigoHttp: number): boolean {
        return HTTP_CODIGOS_ERROR.hasOwnProperty(codigoHttp);
    }
}