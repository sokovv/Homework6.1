const play = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

const elem = ["name", "level"]

export default function orderByProps(play, elem) {
    const arr1 = [];
    const arr2 = [];
    const comparator = (a, b) => a.key.localeCompare(b.key);

    for (const prop in play) {
        const obj = {
            key: prop,
            value: play[prop],
        };
        const index = elem.indexOf(prop);

        if (index !== -1) {
            arr1[index] = obj;
        } else {
            arr2.push(obj);
        }

    }

    arr2.sort(comparator);

    return arr1.concat(arr2);
}
console.log(orderByProps(play, ['name', 'level']));