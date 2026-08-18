/** 将日期格式化为 YYYY.MM.DD */
export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

/** 按中文阅读速度（约 400 字/分钟）估算阅读时长 */
export function readingTime(body: string): number {
  const chars = body.replace(/\s+/g, '').length;
  return Math.max(1, Math.round(chars / 400));
}
