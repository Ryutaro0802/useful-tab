/**
 * localStorageに保存
 * @param {String} storageKey 
 * @param {String} items 
 */
export function setItems(storageKey, items) {
    localStorage.setItem(storageKey, items);
}

/**
 * localStorageから取り出す
 * @param {String} storageKey 
 */
export function getItems(storageKey) {
    return localStorage.getItem(storageKey);
}