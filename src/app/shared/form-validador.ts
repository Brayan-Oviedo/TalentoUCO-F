import { AbstractControl } from "@angular/forms";

export class FormValidador {

    static contrasenasIguales(control: AbstractControl) {

        if(control.get('contrasena').value !== control.get('confirmarContrasena').value) {
            return { 'contrasenasIguales': true };
        }
        return null;
    }
}