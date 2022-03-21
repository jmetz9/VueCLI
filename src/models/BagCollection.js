export default function BagCollection(){
    let arr = []

    arr.addToBag = function(item){
        this.push(item);

        return this;
    }

    arr.removeFromBag = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}