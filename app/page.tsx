'use client';

import { Header1 } from '#/components/Header';
import { Input } from '#/components/Input';
import { cn } from '#/utils/cn';
import { CompanyIcon, icons } from '@trigger.dev/companyicons';
import { Fragment, useMemo, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const allIcons = Object.entries(icons);

export default function Page() {
  const [searchText, setSearchText] = useState('');
  const filteredIcons = useMemo(() => {
    if (!searchText) {
      return allIcons;
    }

    return allIcons.filter(([name]) => name.includes(searchText));
  }, [searchText]);

  return (
    <main className="flex justify-center">
      <div className="w-full max-w-5xl p-8">
        <Header1 variant={'large/bold'}>Company Icons</Header1>
        <Input
          variant="medium"
          icon={<MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />}
          className="mb-6"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_auto))] gap-4">
          {filteredIcons.map(([name, icon]) => {
            if ('all' in icon) {
              return <Icon key={name} name={name} />;
            }

            return (
              <Fragment key={name}>
                <Icon name={name} variant="light" />
                <Icon name={name} variant="dark" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Icon({ name, variant }: { name: string; variant?: 'light' | 'dark' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={cn(
          'relative flex aspect-square w-full flex-col items-center justify-center rounded-md border border-slate-700',
          variant === 'dark' && 'bg-slate-200',
        )}
      >
        <CompanyIcon name={name} variant={variant} className="block h-6 w-6" />
        {variant && (
          <p
            className={cn(
              'absolute bottom-1 text-sm',
              variant === 'dark' ? 'text-slate-800' : 'text-slate-200',
            )}
          >
            {variant}
          </p>
        )}
      </div>
      <p className="text-white">{name}</p>
    </div>
  );
}
