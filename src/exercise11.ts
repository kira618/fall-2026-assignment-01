export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const fs = await import('fs/promises');
  await fs.writeFile(filePath, statusMessage, 'utf8');
}
