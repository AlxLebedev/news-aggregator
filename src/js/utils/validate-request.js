/**
 * Валидирует новостной запрос пользователя на пустоту. Пустой запрос не допускается
 * @param {string} request Новостной запрос пользователя
 * @returns {boolean} Возвращает true/false: пустой запрос - false
 */

export default function validateRequest(request) {
  return request !== '';
}
