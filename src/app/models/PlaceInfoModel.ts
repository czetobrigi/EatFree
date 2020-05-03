export class PlaceInfoModel{
    nameOfPlace: string;
    postCode: number;
    city: string;
    address: string;
    webpage: string;
    type: string;
    intOrSpec: string;

    constructor(obj: any = null){
        if(obj != null){
            Object.assign(this, obj);
        }
    }
}