import { CompanyIcon, icons } from '@trigger.dev/companyicons';
import { Fragment } from 'react';
import clsx from 'clsx';

export default function Page() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl text-slate-200">Company Icons</h1>
        <div className="flex flex-wrap gap-4">
          {Object.entries(icons).map(([name, icon]) => {
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
        className={clsx(
          'relative flex h-24 w-24 flex-col items-center justify-center rounded-md border border-slate-700',
          variant === 'dark' && 'bg-slate-200',
        )}
      >
        <CompanyIcon name={name} variant={variant} className="block h-6 w-6" />
        {variant && (
          <p
            className={clsx(
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
