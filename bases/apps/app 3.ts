// Funciones Básicas
(()=>{
  function sumar( a:number, b:number ):number{
    return a + b;
  }
  
  const contar = ( heroes: string[] ):number => {
    return heroes.length;
  }
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parametros por defecto
  const llamarBatman = ( llamar:boolean = false ):void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas: string[] ):string => {
    return personas.join(", ");
  }
  
  
  // Tipo funcion
  const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo: string[] ):void=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (n:number, t:string, b:boolean, arr:string[]) => void;
  noHaceNadaTampoco = noHaceNada
  
  let opcionComp = (miVariable:number[] = [1,2,3,4])=>{}
  let getName : ()=> string;
})()
