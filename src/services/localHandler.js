"use client";

export function localStorageHandler() {
  const save = (key, value) => {
    let valueTemp = value;
    if (typeof value !== "string") {
      valueTemp = JSON.stringify(value);
    }

    localStorage.setItem(key, valueTemp);
  };

  const getValueByKey = (key) => {
    const response = localStorage.getItem(key);

    return JSON.parse(response);
  };

  const reset = () => {
    localStorage.clear();
  };

  return {
    save,
    getValueByKey,
    reset,
  };
}
