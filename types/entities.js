/**
 * @typedef {Object} Lesson
 * @property {number} [id]
 * @property {string} subject
 * @property {string} location
 * @property {number} price
 * @property {number} slots_available
 * @property {{ url: string, alt: string }} image
 */

/**
 * @typedef {Object} Order
 * @property {number} [id]
 * @property {string} name
 * @property {number} phone_num
 * @property {Array<Lesson.id>} lesson_ids
 * @property {number} slots_purchased
 * @property {number} total_amount
 */

module.exports = {};
