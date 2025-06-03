import clsx from 'clsx';
import { CellType } from '@/types';

export default function Cell({
    r,
    c,
    type,
}: {
    r: number;
    c: number;
    type: CellType;
}) {
    const isDark: boolean =
        (r % 2 === 0 && c % 2 === 1) || (r % 2 === 1 && c % 2 === 0);

    return (
        <div
            className={clsx(
                `w-1/8 h-full flex justify-center items-center cursor-pointer`,
                {
                    'bg-[#739552]': isDark,
                    'bg-[#ebecd0]': !isDark,
                }
            )}
        >
            {type !== '' && <img src={`/${type}.png`} />}
        </div>
    );
}
