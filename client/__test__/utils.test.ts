import '@testing-library/jest-dom';
import { getLegalMoves } from '@/utils';
import { CellType } from '@/types';

describe('', () => {
    it('', () => {
        const board: CellType[][] = [
            ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
            ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
            ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
        ];

        expect(getLegalMoves(board, 0, 0, 'w')).toEqual([]);
    });
});
