const json = {
    status: 'OK',
    message: 'Dados retornados com sucesso!',
    data: [
        {
            name: 'JOÃO GABRIEL XAVIER',
            type: 'ALUNO',
            devices: [
                {
                    name: 'GUARITA',
                    position: {
                        lat: -25.585862659936392,
                        lng: -48.56442553611141,
                    },
                },
            ],
        },
        {
            name: 'GIL EDUARDO DE ANDRADE',
            type: 'PROFESSOR',
            devices: [
                {
                    name: 'ENT. BLOCO DIDÁTICO',
                    position: {
                        lat: -25.58598240973987,
                        lng: -48.56530932396183,
                    },
                },
                {
                    name: 'ENT. DOS FUNDOS BLOCO DIDÁTICO',
                    position: {
                        lat: -25.58560017761799,
                        lng: -48.56553731172847,
                    },
                },
            ],
        },
    ],
}

export default json