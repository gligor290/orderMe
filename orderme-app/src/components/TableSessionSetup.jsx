function TableSessionSetup({ guestName, setGuestName, onStart }) {
    return (
        <div className="w-full max-w-sm flex flex-col gap-4">
            <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name (optional)"
                className="p-3 border border-gray-300 rounded-md"
            />
            <button
                onClick={onStart}
                className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
                Start Ordering
            </button>
        </div>
    );
}

export default TableSessionSetup;
