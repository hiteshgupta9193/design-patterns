class ChocolateIceCream {}
class VanillaIceCream {}
class StrawberryIceCream {}
// class MangoIceCream {}
// class MintIceCream {}
// class OrangeIceCream {}
// class ButterscotchIceCream {}
// class CoffeeIceCream {}

class MakeIceCream {
  constructor(flavor) {
    let iceCream;

    switch (flavor) {
      case "chocolate":
        iceCream = new ChocolateIceCream();
        break;
      case "vanilla":
        iceCream = new VanillaIceCream();
        break;
      case "strawberry":
        iceCream = new StrawberryIceCream();
        break;
      case "mango":
        iceCream = new MangoIceCream();
        break;
      // case "mint":
      //   iceCream = new MintIceCream();
      //   break;
      // case "orange":
      //   iceCream = new OrangeIceCream();
      //   break;
      // case "butterscotch":
      //   iceCream = new ButterscotchIceCream();
      //   break;
      // case "coffee":
      //   iceCream = new CoffeeIceCream();
      //   break;
      default:
        console.log("Sorry, we don't have that flavor.");
    }
    this.iceCream = iceCream;
  }

  make() {
    console.log(`Making ${this.flavor} ice cream.`);
  }
}
