import Board from '@/components/Board';

export default function Home() {
    return (
        <main className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-[#302e2b]">
            <div className="h-[464px] w-[464px]">
                <Board />
            </div>
        </main>
    );
}
