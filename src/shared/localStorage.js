export function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API 
  }
}

export function getLocalStorage(key) {
  try {
    const value = window.localStorage.getItem(key);
    return value;
  } catch (error) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

export function deleteLocalStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}
