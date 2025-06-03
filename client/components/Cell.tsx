import clsx from 'clsx';
import { CellType } from '@/types';

export default function Cell({
    r,
    c,
    type,
    choose,
    isChosen,
}: {
    r: number;
    c: number;
    type: CellType;
    choose: (num: number) => void;
    isChosen: boolean;
}) {
    const isDark: boolean =
        (r % 2 === 0 && c % 2 === 1) || (r % 2 === 1 && c % 2 === 0);

    return (
        <div
            className={clsx(`w-1/8 h-full flex justify-center items-center`, {
                'cursor-pointer': type !== '',
                'bg-[#739552]': isDark && !isChosen,
                'bg-[#ebecd0]': !isDark && !isChosen,
                'bg-[#b9ca42]': isDark && isChosen,
                'bg-[#f5f580]': !isDark && isChosen,
            })}
            onClick={() => {
                if (type !== '') {
                    choose(r * 8 + c);
                }
            }}
        >
            {type !== '' && <img src={`/${type}.png`} />}
        </div>
    );
}
