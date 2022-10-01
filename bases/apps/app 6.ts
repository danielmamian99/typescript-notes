namespace Heroes{
    interface powers {
        id: number,
        desc: string
    }
    export class Hero{

        constructor(
            public name: string,
            public powerId: number,
            public age: number,
            public powers:powers[]
        ){}

        get power():string {
            return powers.find( power => power.id === this.powerId)?.desc || 'not found';
        }
    }
    const powers: powers[] = [{
        id:1,
        desc:'volar'
    },{
        id:2,
        desc:'fuerza'
    }]
    const ironman = new Hero('Ironman', 5, 55, powers);
    console.log('ironman >>>', ironman);
    console.log('ironman.power >>>', ironman.power);
}