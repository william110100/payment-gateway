export const useOrderID = () => {
  const characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
