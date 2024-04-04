const isAlphabet = (value) => {
  const cleanValue = value.replace(/\s{2,}/g, " ").toLowerCase();
  return /^[a-zA-Z\s]+$/.test(cleanValue);
};

const isUser = (value) => {
  const cleanValue = value.trim();
  return /^[a-zA-Z][a-zA-Z0-9]+$/.test(cleanValue);
};

const isEmail = (value) => {
  const cleanValue = value.trim();
  return /^[a-zA-Z0-9]+[a-zA-Z0-9.%\-\+]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/.test(
    cleanValue
  );
};

const isMobile = (value) => {
  const cleanValue = value.trim();
  if (cleanValue === "") {
    return true;
  } else {
    return /^[0-9+][0-9]{8,11}$/.test(cleanValue);
  }
};

export default {
  isAlphabet,
  isUser,
  isEmail,
  isMobile,
};
