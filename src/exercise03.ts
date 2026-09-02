export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
   const inStock = inventory.filter((item) => {
    const quantity = item[1];
    return quantity > 5;
  });

  const total = inStock.reduce((sum, item) => {
    const quantity = item[1];
    const price = item[2];
    return sum + quantity * price;
  }, 0);

  return total;
}
