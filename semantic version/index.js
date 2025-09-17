import _ from "lodash";

const array = [1, 2, 3, 4, 5, 6];

const doubled = _.map(array, (num) => num * 2);

console.log(doubled);
