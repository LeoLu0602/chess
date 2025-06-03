import Cell from '@/components/Cell';

export default function Board() {
    const board = [];

    for (let i = 0; i < 8; i++) {
        const row = [];

        for (let j = 0; j < 8; j++) {
            row.push(<Cell key={j} r={i} c={j} />);
        }

        board.push(
            <div className="flex w-full h-1/8" key={i}>
                {row}
            </div>
        );
    }

    return <div className="w-full h-full">{board}</div>;
}
