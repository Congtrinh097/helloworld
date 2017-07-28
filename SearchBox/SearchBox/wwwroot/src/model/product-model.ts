export interface ProductModel {
  Id?:number,
  cate_id: number,
  name: string,
  price: number,
  stocked: number,
  image: string,
  description: string
}

export class Product{
  static Init():ProductModel{
    let model:ProductModel;
    model.name="";
    model.price=0;
    model.cate_id = 0;
    model.description = '';
    model.stocked = 1;
    model.image = "";

    return model;
  }
}