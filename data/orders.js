/** @type {import("../types/entities").Order} */
const order1 = {
  id: 1,
  name: "Alex Morgan",
  phone_num: 447700900001,
  lesson_ids: [1],
  slots_purchased: 1,
  total_amount: 50,
};

/** @type {import("../types/entities").Order} */
const order2 = {
  id: 2,
  name: "Sam Taylor",
  phone_num: 447700900002,
  lesson_ids: [2, 6],
  slots_purchased: 2,
  total_amount: 155,
};

/** @type {import("../types/entities").Order} */
const order3 = {
  id: 3,
  name: "Jordan Lee",
  phone_num: 447700900003,
  lesson_ids: [3, 7, 11],
  slots_purchased: 3,
  total_amount: 165,
};

/** @type {import("../types/entities").Order} */
const order4 = {
  id: 4,
  name: "Casey Patel",
  phone_num: 447700900004,
  lesson_ids: [4, 8],
  slots_purchased: 2,
  total_amount: 65,
};

/** @type {import("../types/entities").Order} */
const order5 = {
  id: 5,
  name: "Riley Chen",
  phone_num: 447700900005,
  lesson_ids: [5],
  slots_purchased: 1,
  total_amount: 60,
};

/** @type {import("../types/entities").Order} */
const order6 = {
  id: 6,
  name: "Jamie Wilson",
  phone_num: 447700900006,
  lesson_ids: [9, 10],
  slots_purchased: 2,
  total_amount: 100,
};

/** @type {import("../types/entities").Order} */
const order7 = {
  id: 7,
  name: "Avery Brown",
  phone_num: 447700900007,
  lesson_ids: [12, 13, 14],
  slots_purchased: 3,
  total_amount: 150,
};

/** @type {import("../types/entities").Order} */
const order8 = {
  id: 8,
  name: "Morgan Davis",
  phone_num: 447700900008,
  lesson_ids: [15, 1],
  slots_purchased: 2,
  total_amount: 100,
};

/** @type {import("../types/entities").Order} */
const order9 = {
  id: 9,
  name: "Taylor Kim",
  phone_num: 447700900009,
  lesson_ids: [6, 7],
  slots_purchased: 2,
  total_amount: 145,
};

/** @type {import("../types/entities").Order} */
const order10 = {
  id: 10,
  name: "Reese Ahmed",
  phone_num: 447700900010,
  lesson_ids: [2, 5, 8],
  slots_purchased: 3,
  total_amount: 180,
};

module.exports = [order1, order2, order3, order4, order5, order6, order7, order8, order9, order10];
