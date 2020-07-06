let body = document.getElementsByTagName('body')[0],
h3 = document.createElement ("h3")
body.append (h3)
h3.append ('Flip The Coin');
//     main = document.createElement('main');
// body.append(main);


let coin = {
    state: 0,

    flip: function () {
        this.state = Math.round(Math.random())
        thisState = this.state
        return thisState

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },

    toString: function () {
        let newString = document.createElement('string');
        newString.setAttribute('div', 'newString')
        body.append(newString);
        /* 2. Return the string , depending on whether
           "this.state" is 0 or 1. */


        if (this.state == 0) {
            document.body.append("Tails", "\xa0\xa0 ");

        }
        else if (this.state == 1) {
            document.body.append("Heads", "\xa0\xa0 ");

        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.setAttribute('class', 'image');
        image.setAttribute('alt', 'image');
        body.append(image);
        image.setAttribute('width', '120px');
        image.setAttribute("border", "4px solid green");

        if (this.state == 0) {

            image.setAttribute("src", "Tails.jpg", "   ");

        }
        else if (this.state == 1) {

            image.setAttribute("src", "Heads.jpg", "   ");

        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

// String For Loop

    for (let stringIndex = 0; stringIndex < 20; stringIndex++) {
        coin.flip(); coin.toString()
    
    
    
}


// image For loop

    for (let imageIndex = 0; imageIndex < 20; imageIndex++) {
 coin.toHTML(); coin.flip();
    
    
}




// Button Element

let flipCoinElement = document.createElement('button');
flipCoinElement.setAttribute('id', 'flipCoin')
flipCoinElement.append('Flip Coin');
body.append(flipCoinElement);

// addEventListener
var x = document.getElementById("flipCoin");
x.addEventListener("click", flip);

function flip() {
  location.reload();
}