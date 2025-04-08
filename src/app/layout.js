import './globals.css';

export const metadata = {
  title: 'ThreeJS Visuals',
  description: 'A website with Three.js and cool 3D visuals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 