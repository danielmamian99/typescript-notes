// Crear interfaces
(() => {
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Auto {
    encender:boolean,
    velocidadMaxima: number,
    acelear():void
  }
  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };

  const batimovil:Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
    reir ?: boolean,
    comer?: boolean,
    llorar?: boolean,
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason:Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion
  interface CiudadGotica {
    (a: string[]): number
  }
  const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
  interface PersonaType{
    nombre : string,
    edad: number,
    sexo: string,
    estadoCivil: string,
    imprimirBio():void
  }
  class Persona implements PersonaType{
    constructor(public nombre:string, public edad:number, public sexo:string, public estadoCivil:string){}
    imprimirBio(): void {
      console.log(`${this.nombre}, edad: ${this.edad}`)
    }
  }
  const persona1 = new Persona('Luis', 22, 'Masculino', 'Casado');
  persona1.imprimirBio()
  
  interface Carro{
    llantas:number;
    modelo:string;
  }
   
  interface Volvo extends Carro{
    seguro:boolean;
  }
   
  var volvo:Volvo = {
    llantas: 4,
    modelo:"sedan",
    seguro:true
    
  }
})();
