import { ReactElement, SVGProps } from 'react';

const CrossIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 252 252"
    enableBackground="new 0 0 252 252"
    width={24}
    height={24}
    xmlSpace="preserve"
    {...props}>
    <path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z" />
    <path d="M164.612 87.388a9 9 0 0 0-12.728 0L126 113.272l-25.885-25.885a9 9 0 0 0-12.728 0 9 9 0 0 0 0 12.728L113.272 126l-25.885 25.885a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 0 0 0-12.728L138.728 126l25.885-25.885a9 9 0 0 0-.001-12.727z" />
  </svg>
);

export default CrossIcon;
