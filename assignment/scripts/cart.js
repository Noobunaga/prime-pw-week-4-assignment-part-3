console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];

function addItem(item) {
  const name = { item: item }
  basket.push(item);
  console.log(` ${item} was added to basket`);
  return true


}

function listItems(name) {
  console.log(`You have ${basket.length} in basket`)
    for (let i = 0; i < basket.length; i += 1){
      console.log(` ${basket[i]}`)
    }
}

function empty(basket){
  while(basket.length > 0){
    basket.pop();
    console.log('Basket Emptied!');
  }
}
