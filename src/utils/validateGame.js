export const ValidateGame = (player, computed) => {
  if (player === 1 && computed === 3) return "win";
  if (player === 2 && computed === 1) return "win";
  if (player === 3 && computed === 2) return "win";
  if (player === computed) return "draw";
  return "lose";
};
