import clsx from 'clsx';

export default function Cell({ r, c }: { r: number; c: number }) {
    const isDark: boolean =
        (r % 2 === 0 && c % 2 === 1) || (r % 2 === 1 && c % 2 === 0);

    return (
        <div
            className={clsx(
                'grow-1 flex justify-center items-center cursor-pointer',
                {
                    'bg-[#739552]': isDark,
                    'bg-[#ebecd0]': !isDark,
                }
            )}
        />
    );
}
