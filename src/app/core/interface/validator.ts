import {AbstractControl, FormControl} from '@angular/forms';

export class Validator {

    static cpfValidator(control: FormControl) {
        if (control.value == null) {
            return {'cpf' : true};
        } else {
            const cpf: string = control.value.toString().replace(/[\.|\/|\- ]/g, '');

            if (cpf.length !== 11) {
                return {'cpf': true};
            }
            if (cpf === '00000000000' ||
                cpf === '11111111111' ||
                cpf === '22222222222' ||
                cpf === '33333333333' ||
                cpf === '44444444444' ||
                cpf === '55555555555' ||
                cpf === '66666666666' ||
                cpf === '77777777777' ||
                cpf === '88888888888' ||
                cpf === '99999999999') {

                return {'cpf': true};
            }

            let listLength = cpf.length - 2;
            let numbers = cpf.substring(0, listLength);
            const digits = cpf.substring(listLength);
            let sum: any = 0;
            let pattern = 10;
            for (let i = listLength; i >= 1; i--) {
                sum += parseInt(numbers.charAt(listLength - i), 10) * pattern--;
            }
            let result = ((sum * 10) % 11) === 10 ? 0 : (sum * 10) % 11;
            if (result !== parseInt(digits.charAt(0), 10)) {
                return {'cpf': true};
            }

            listLength = listLength + 1;
            numbers = cpf.substring(0, listLength);
            sum = 0;
            pattern = 11;
            for (let i = listLength; i >= 1; i--) {
                sum += parseInt(numbers.charAt(listLength - i), 10) * pattern--;
            }
            result = ((sum * 10) % 11) === 10 ? 0 : (sum * 10) % 11;
            if (result !== parseInt(digits.charAt(1), 10)) {
                return {'cpf': true};
            }

            return null;
        }
    }

    static givenInvalid(controle: AbstractControl) {
        const given = controle.value;
        let valido: boolean;
        const regex = new RegExp('[0-9]{11}');

        if (
            given === '00000000000' ||
            given === '11111111111' ||
            given === '22222222222' ||
            given === '33333333333' ||
            given === '44444444444' ||
            given === '55555555555' ||
            given === '66666666666' ||
            given === '77777777777' ||
            given === '88888888888' ||
            given === '99999999999' ||
            !regex.test(given)
        )
            valido = false;
        else {
            valido = true;
        }
        if (valido || given === '' || given == null) {
            return null;
        }

        return { givenInvalid: true };
    }


}
