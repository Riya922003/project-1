/**
 * Generate a blur placeholder data URL for Next.js Image component
 * @param width - Width of the placeholder
 * @param height - Height of the placeholder
 * @returns Base64 encoded SVG blur placeholder
 */
export function blurPlaceholder(width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e0e7ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dbeafe;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
    </svg>
  `;

  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
