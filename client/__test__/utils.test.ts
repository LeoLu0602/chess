import '@testing-library/jest-dom';
import { getLegalMoves } from '@/utils';
import { CellType } from '@/types';

describe('getLegalMoves', () => {
    test('get legal moves for rook on an empty board', () => {
        const board: CellType[][] = [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', 'wr', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
        ];
        const actual: number[] = getLegalMoves(board, 3, 3, 'w');
        const expected: number[] = [
            3, 11, 19, 35, 43, 51, 59, 24, 25, 26, 28, 29, 30, 31,
        ];

        expect(actual.sort((a, b) => a - b)).toEqual(
            expected.sort((a, b) => a - b)
        );
    });

    test('get legal moves for bishop on an empty board', () => {
        const board: CellType[][] = [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', 'wb', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
        ];
        const actual: number[] = getLegalMoves(board, 3, 3, 'w');
        const expected: number[] = [
            0, 9, 18, 36, 45, 54, 63, 48, 41, 34, 20, 13, 6,
        ];

        expect(actual.sort((a, b) => a - b)).toEqual(
            expected.sort((a, b) => a - b)
        );
    });
});
