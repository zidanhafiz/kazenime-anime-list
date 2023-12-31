'use client';

import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const mangas: { title: string; href: string; description: string }[] = [
  {
    title: 'All Mangas',
    href: '/manga',
    description: 'See all mangas',
  },
  {
    title: 'Popular Mangas',
    href: '/manga/popular',
    description: 'See the most popular mangas',
  },
  {
    title: 'Recommended Mangas',
    href: '/manga/recommended',
    description: 'See our recommended mangas',
  },
];

const animes: { title: string; href: string; description: string }[] = [
  {
    title: 'All Animes',
    href: '/anime',
    description: 'See all animes',
  },
  {
    title: 'Popular Animes',
    href: '/anime/popular',
    description: 'See the most popular animes',
  },
  {
    title: 'Recommended Animes',
    href: '/anime/recommended',
    description: 'See our recommended animes',
  },
];

const genres: { title: string; href: string; description: string }[] = [
  {
    title: 'Anime Genres',
    href: '/genres/anime',
    description: 'See all animes genres',
  },
  {
    title: 'Manga Genres',
    href: '/genres/manga',
    description: 'See all mangas genres',
  },
];
export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Anime</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] '>
              {animes.map((anime) => (
                <Link
                  key={anime.title}
                  title={anime.title}
                  href={anime.href}
                >
                  {anime.description}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Manga</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] '>
              {mangas.map((manga) => (
                <Link
                  key={manga.title}
                  title={manga.title}
                  href={manga.href}
                >
                  {manga.description}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] '>
              {genres.map((genre) => (
                <Link
                  key={genre.title}
                  title={genre.title}
                  href={genre.href}
                >
                  {genre.description}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NextLink
            href='/genres'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              On 
            </NavigationMenuLink>
          </NextLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface LinkProps {
  href: string;
  title: string;
  children?: React.ReactNode;
}

const Link = ({ href, title, children }: LinkProps) => {
  return (
    <NextLink
      href={href}
      passHref
      legacyBehavior
    >
      <NavigationMenuLink
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        )}
      >
        <div className='text-sm font-medium leading-none'>{title}</div>
        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
      </NavigationMenuLink>
    </NextLink>
  );
};
