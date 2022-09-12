export const dateMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

export const expirationDateCard = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{2})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

export const expirationDateCardRevert = (value) => {
    var id = value;
    var expirationDate = id.replace(/\//g,'');
    return expirationDate;
}

export const creditCard = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{16})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{16})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

export const cvcCard = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{3})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

export const conclusionAE = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{4})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{4})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}


export const dateofbirthDependet = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1') //
      .replace(/(\d{2})\d+?$/, '$1') //
}

export const cep = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/^(\d{5})(\d{3}).*/,"$1-$2")
}

//phoneNumbersOnly
export const phoneNumbersOnly = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    //   .replace(/(\d{11})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
    //   .replace(/(\d{11})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}


export const Dinheiro = (value) => {
    // return (Number(value.replace(/\D/g, "")) / 100);
    return (Number(value.replace(/\D/g, "")) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };
    
    // export  const phones = (value) => {
    // return typeof (value) === 'number' ? value : (Number(value.replace(/\D/g, "")) / 100);
    // }


export const phones = v => {
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
    

    // return value
    // .replace(/\D/g, "")
    // .replace(/(\d{2})(\d)/, "($1) $2")
    // .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");

    // var r = v.replace(/\D/g,"");
    // r = r.replace(/^0/,"");
    // if (r.length > 10) {
    //     // 11+ digits. Format as 5+4.
    //     r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3");
    // }
    // else if (r.length > 5) {
    //     // 6..10 digits. Format as 4+4
    //     r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/,"($1) $2-$3");
    // }
    // else if (r.length > 2) {
    //     // 3..5 digits. Add (xx)
    //     r = r.replace(/^(\d\d)(\d{0,5})/,"($1) $2");
    // }
    // else {
    //     // 0..2 digits. Just add (0XX
    //     r = r.replace(/^(\d*)/, "$1");
    // }
    // return r;
}

export const mCPF = (cpf) => {
    if (cpf.length > 13) {
        cpf=cpf.replace(/(\d{2})\d+?$/, '$1') // captura 2 numero seguido e não deixa ser digitado mais nada
        return cpf
    } else {
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return cpf
    }

}

export const mCPF_ONLY_NUMBERS = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{11})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{11})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}


export const mRG = (rg) => {
    if (rg.length > 10) {
        rg=rg.replace(/(\d{1})\d+?$/, '$1') // captura 1 numero seguido e não deixa ser digitado mais nada
        return rg
    }
    else if (rg.length === 2) {
        rg=rg.replace(/(\d{1})(\d)/, '$1.$2')
        return rg
    }
    else {
        rg=rg.replace(/\D/g,"")
        rg=rg.replace(/(\d{1})(\d{3})/,"$1.$2")
        rg=rg.replace(/(\d{3})(\d{3})/,"$1.$2")
        rg=rg.replace(/(\d{3})(\d{1})/,"$1-$2")
        return rg
    }
}
export const mRGNovo = value => {
    return value
        .replace(/\D/g,"")
        .replace(/(\d{2})(\d{3})/,"$1.$2")
        .replace(/(\d{3})(\d{3})/,"$1.$2")
        .replace(/(\d{3})(\d{1})/,"$1-$2")
        .replace(/(\d{3})(\d{1})/,"$1")
}


export const mPisNumber = value => {
    return value
        .replace(/\D/g,"")
        .replace(/(\d{3})(\d{5})(\d{2})(\d{1})/,"$1.$2.$3-$4")
}

//conclusionAcademicEducation
export const mCNH = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{11})(\d)/, '$1') // captura 11 grupos de numero
      .replace(/(\d{11})\d+?$/, '$1') // captura 11 numeros seguidos e não deixa ser digitado mais nada
}

//serialNumber
export const mSerialNumber = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d{1})/,"$1-$2")
    //   .replace(/(\d{4})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{4})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

// export const mPIS = (pis) => {
//     return value
//         pis=pis.replace(/\D/g,"")
//         pis=pis.replace(/(\d{3})(\d)/,"$1.$2")
//         pis=pis.replace(/(\d{3})(\d)/,"$1.$2")
//         return pis

// }

export const mPIS = (pis) => {
    if (pis.length > 14) {
        pis=pis.replace(/(\d{1})\d+?$/, '$1') // captura 2 numero seguido e não deixa ser digitado mais nada
        return pis
    } else if (pis.length > 12) {
        pis=pis.replace(/(\d{2})(\d{1,2})$/,"$1-$2")
        return pis
    }  else {
        pis=pis.replace(/\D/g,"")
        pis=pis.replace(/(\d{3})(\d)/,"$1.$2")
        pis=pis.replace(/(\d{3})(\d)/,"$1.$2")
        return pis
    }

}

export const mVoterRegistration = (vr) => {
    if (vr.length > 13) {
        vr=vr.replace(/(\d{4})\d+?$/, '$1') // captura 2 numero seguido e não deixa ser digitado mais nada
        return vr
    } else {
        vr=vr.replace(/\D/g,"")
        vr=vr.replace(/(\d{4})(\d)/,"$1.$2")
        vr=vr.replace(/(\d{4})(\d)/,"$1.$2")
        vr=vr.replace(/(\d{4})(\d)/,"$1.$2")
        return vr
    }

}

export const mElectoralZone = value => {

    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d)/, '$1')
      .replace(/(\d{5})\d+?$/, '$1')
}

//reservationCardNumber
export const mReservationCardNumber = value => {

    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{15})(\d)/, '$1')
      .replace(/(\d{15})\d+?$/, '$1')
}
//reservationCardCategory
export const mReservationCardCategory = value => {
    return value
    //   .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{4})(\d)/, '$1') //
      .replace(/(\d{4})\d+?$/, '$1') //
}
// export const mCNPJ = (cpf) => {
export const mCNPJ  = value => {
    return value
    .replace(/\D/g, '')

    .replace(/(\d{2})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d)/,"$1/$2")
    .replace(/(\d{4})(\d{1,2})$/,"$1-$2")
    // .replace(/(\d{4})(\d)/,"$1-$2")
    // .replace(/(\d{4})\d+?$/, '$1')

}

export const mCNPJ_ONLY_NUMBERS = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    //   .replace(/(\d{14})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
    //   .replace(/(\d{14})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}


export const mCPFmCNPJ = cpfCnpj => {

    if (cpfCnpj.length < 15) {
        if (cpfCnpj.length > 13) {
            cpfCnpj=cpfCnpj.replace(/(\d{2})\d+?$/, '$1') // captura 2 numero seguido e não deixa ser digitado mais nada
            return cpfCnpj
        } else {
            cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1.$2")
            cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1.$2")
            cpfCnpj=cpfCnpj.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
            return cpfCnpj
        }
    } else {
        cpfCnpj=cpfCnpj.replace(/\D/g, '')
        cpfCnpj=cpfCnpj.replace(/(\d{2})(\d)/,"$1.$2")
        cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1.$2")
        cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1/$2")
        cpfCnpj=cpfCnpj.replace(/(\d{4})(\d)/,"$1-$2")
        return cpfCnpj
    }
}

export const mNumber  = value => {
    return value
    .replace(/\D/g, '')

}
export const nMoney  = value => {

    if(value.length === 3) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/,"$1,$2")
    }
    else
    if(value.length === 5) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/,"$1,$2")
    }
    else
    if(value.length === 6) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/,"$1,$2")
    }
    else
    if(value.length === 7) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1,$2")

    }
    else
    if(value.length === 8) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1,$2")
        .replace(/(\d{3})(\d)/,"$1,$2")

    }
    else
    if(value.length === 9) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1,$2")
        .replace(/(\d{3})(\d)/,"$1,$2")
        .replace(/(\d{3})(\d)/,"$1,$2")

    }
    else {
        return value
        .replace(/(\d)(\d{2})+?$/, '$1') //
    }

}

export const mVacationDaysSold = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
      .replace(/(\d{2})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}


