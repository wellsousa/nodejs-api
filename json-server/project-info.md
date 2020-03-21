Referência: https://www.youtube.com/watch?v=KT5PDzclXf0&feature=youtu.be&fbclid=IwAR0wGuCysx92aqkqH3rnfjSRo0_y7QiyXH-en80ASGsKsw2f4NBILFksDZ8

SETUP

inicializaçao do package.json:

    npm init -y

adição da dependencia express:

    npm install --save express

adição da depedência nodemon:

    npm install --save nodemon

Na seção de scripts foi criado um script para executar o projeto:

            "scripts": {
                "dev": "nodemon"
            }

  para executar com o nodemon o comando no terminal é:

    npm run dev