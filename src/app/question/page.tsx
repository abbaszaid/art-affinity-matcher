// src/app/question/page.tsx
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CSSProperties } from 'react';

export default function Question() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const name = searchParams.get('name');
  const artworkId = searchParams.get('artworkId');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {name}!</h1>
      <p style={styles.subtitle}>Your unique ID: {userId}</p>
      <div style={styles.imageContainer}>
        <Image
          src={`/data/picture1.jpeg`} // Update this path to match the image in the public directory
          alt={`Artwork ${artworkId}`}
          width={500}
          height={500}
          style={styles.image}
        />
      </div>
      <p style={styles.instruction}>What do you feel when you see this?</p>
      <button style={styles.button} onClick={() => alert("Response submitted!")}>
        Submit Response
      </button>
    </div>
  );
}

// Define styles with CSSProperties for TypeScript compatibility
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column' as CSSProperties['flexDirection'],
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1a1a2e',
    color: '#ffcc00',
    fontFamily: 'Press Start 2P, cursive',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
    textShadow: '4px 4px #ff0055',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  imageContainer: {
    border: '5px solid #ffcc00',
    padding: '10px',
    margin: '20px',
  },
  image: {
    borderRadius: '8px',
  },
  instruction: {
    fontSize: '1.2rem',
    marginTop: '20px',
    textAlign: 'center' as CSSProperties['textAlign'],
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#1a1a2e',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textShadow: '2px 2px #000',
  },
};
