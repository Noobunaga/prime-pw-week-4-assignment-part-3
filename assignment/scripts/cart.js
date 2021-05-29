console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];

function addItem(item) {
  const name = { item: item, qty: 1 }
  basket.push(item);


}

function listItems(name) {
  console.log(`You have ${basket.length} in basket`)
    for (let i = 0; i < basket.length; i += 1){
      console.log(` ${basket[i]}`)
    }

}

function empty() {

}

addItem('Fishing pole')
addItem('Fishing reel')
addItem('Fishing lure')
addItem('Fishing line')
addItem('Fishing net')

listItems()
