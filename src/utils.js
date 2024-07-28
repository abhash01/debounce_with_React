const fectdata = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const debounce = (call, d) => {
  // if(typeOf call !== "function"){
  //   throw new Error("this is not a function")
  // }
  // if(typeOf d !== "number" && d < 0){
  //   throw new Error("delay is not define")
  // }
  let timer;
  return function (...args) {
    return new Promise((resolve) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(async () => {
        const data = await call(...args);
        resolve(data);
      }, d);
    });
  };
};

const debouncer = debounce(fectdata, 1000);
export default debouncer;
