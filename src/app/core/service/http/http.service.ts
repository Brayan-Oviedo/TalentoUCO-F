import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Opciones } from "./opciones";


const MARCA = '0__# o()xxxx[{::::::::::::::::::>';
const BY = 'By';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    private crearOpcionesPorDefecto(): Opciones {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    private agregarMarca(opciones: Opciones) {
        opciones.headers = opciones.headers.set(BY, MARCA);
    }

    private crearOpciones(): Opciones {
        const opciones = this.crearOpcionesPorDefecto();
        this.agregarMarca(opciones);
        return opciones;
    } 

    public get<T>(url: string): Observable<T> {
        const opciones = this.crearOpciones();
        return this.httpClient.get<T>(url, opciones);
    }

    public post<T, R>(url: string, cuerpo: T): Observable<R> {
        const opciones = this.crearOpciones();
        return this.httpClient.post<R>(url, cuerpo, opciones);
    }

    public put<T, R>(url: string, cuerpo: T): Observable<R> {
        const opciones = this.crearOpciones();
        return this.httpClient.put<R>(url, cuerpo, opciones);
    }

    public delete<R>(url: string): Observable<R> {
        const opciones = this.crearOpciones();
        return this.httpClient.delete<R>(url, opciones);
    }
}