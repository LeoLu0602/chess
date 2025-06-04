import '@testing-library/jest-dom';
import { getLegalMoves } from '@/utils';
import { CellType } from '@/types';

describe('getLegalMoves', () => {
    it('should get legal moves for rook on an empty board', () => {
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
        const actual: number[] = getLegalMoves(board, 0, 0, 'w');
        const expected: number[] = [
            3, 11, 19, 35, 43, 51, 59, 24, 25, 26, 28, 29, 30, 31,
        ];

        expect(actual.sort((a, b) => a - b)).toEqual(
            expected.sort((a, b) => a - b)
        );
    });
});
