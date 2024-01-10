window.prompt("Please enter a list of comma-separated froyo flavors.")

const user = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

function countFroyoFlavors(froyoFlavors) {
    const flavors = froyoFlavors.split(',');

    const flavorCounts = {};
    for (let i = 0; i < flavors.length; i++) {
        let flavor = flavors[i].trim();
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;

};

return flavorCounts;

}

const result = countFroyoFlavors(user);
console.table(result);
console.log(result);

