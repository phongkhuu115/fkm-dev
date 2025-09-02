import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Link2, ExternalLink } from 'lucide-react';

export const SectionHeader = (props: {
  title: string;
  href?: string;
  hrefTitle?: string;
}) => {
  const { title, href, hrefTitle } = props;

  return (
    <div className='flex items-center justify-between'>
      <a href={`#${title}`} className='flex items-center gap-4 flex-1'>
        <Badge variant={'outline'} className='text-2xl'>
          <span className='text-primary font-semibold'>@</span>
          <span className='text-white flex items-center gap-2'>
            {title} <Link2 />
          </span>
        </Badge>
        <div className='h-[1px] w-[25%] bg-primary' />
      </a>
      {href && hrefTitle && (
        <Link href={href} className='text-primary hover:underline'>
          <span className='flex items-center gap-2'>{hrefTitle} <ExternalLink /></span>
        </Link>
      )}
    </div>
  );
};
