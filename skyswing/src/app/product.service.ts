import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getImagePaths(prod) {
    let params: URLSearchParams = new URLSearchParams();
    let productList = {}
    productList['outdoor'] = {}
    productList['restaurant'] = {}
    productList['spa'] = {}
    productList['photo'] = {}

    const folder = '../assets/images/' + 'swing';

    productList['outdoor']["Hot Air Balloon"] = [1]
    productList['outdoor']["Swing"] = [1,2,3,4]
    productList['outdoor']["Rafting"] = [1]
    productList['outdoor']["VW Safari"] = [1,2,3,4,5,6]

    productList['restaurant']["Restaurant"] = [1,2,3,4,5,6,7,8,9]
    productList['restaurant']["Food"] = [1,2,3,4,5,6]
    productList['photo']["Photo Spots"] = [1,2,3,4,5,6,7,8]
    productList['spa']["Spa and Massage"] = [1,2]
    console.log(productList[prod])
    return productList[prod]
  }

  getItemList(prod){
    let productList = {}
    productList['outdoor'] = ["Hot Air Balloon", "Swing", "Rafting", "VW Safari"]
    productList['restaurant'] = ["Restaurant", "Food"]
    productList['spa'] = ['Spa and Massage']
    productList['photo'] = ['Photo Spots']

    return productList[prod]
  }
}
