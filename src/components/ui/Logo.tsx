import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'dark', width = 92, height = 40 }: LogoProps) {
  return (
    <Link href="/" className="relative block" style={{ width, height }}>
      <Image
        src={variant === 'dark' ? '/images/logo-epag-dark.svg' : '/images/logo-epag-light.svg'}
        alt="EPAG"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
