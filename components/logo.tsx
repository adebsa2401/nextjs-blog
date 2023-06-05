import Link from "next/link";

type Props = {
  home?: boolean
};

export default function Logo({ home }: Props) {
  if (home) {
    return (
      <h1 className="text-[2.5rem]/[1.2] md:text-[6.25rem] font-bold tracking-tighter">Blog.</h1>
    );
  }

  return (
    <h2 className="text-4xl font-bold tracking-tighter">
      <Link className="hover:underline" href="/">Blog</Link>.
    </h2>
  );
}

Logo.defaultProps = {
  home: false
}
