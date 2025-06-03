'use client';

import { useState } from 'react';
import { CellType } from '@/types';
import Cell from '@/components/Cell';

export default function Board() {
    const [board, setBoard] = useState<CellType[][]>([
        ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
        ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
        ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
    ]);
    const [chosen, setChosen] = useState<number | null>(null); // 0 - 63

    function choose(num: number) {
        setChosen(num);
    }

    const boardHTML = new Array(8);

    for (let i = 0; i < 8; i++) {
        const row = new Array(8);

        for (let j = 0; j < 8; j++) {
            row[j] = (
                <Cell
                    key={j}
                    r={i}
                    c={j}
                    type={board[i][j]}
                    choose={choose}
                    isChosen={chosen === i * 8 + j}
                />
            );
        }

        boardHTML[i] = (
            <div className="flex w-full h-1/8" key={i}>
                {row}
            </div>
        );
    }

    return <div className="w-full h-full">{boardHTML}</div>;
}
