import {useParams, useNavigate} from "react-router-dom"
import {useState} from "react";
import TableSessionSetup from "../components/TableSessionSetup.jsx";

function LandingPage() {
    const {tableId } = useParams();
    const navigate = useNavigate();
    const [guestName, setGuestName] = useState("");

    const handleStart = () => {
        localStorage.setItem("guestName", guestName);
        localStorage.setItem("tableId", tableId);
        navigate("/menu");
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">🍽️ Welcome to OrderMe</h1>
            <p className="mb-6">You’re sitting at <strong>Table #{tableId}</strong></p>
            <TableSessionSetup
                guestName={guestName}
                setGuestName={setGuestName}
                onStart={handleStart}
            />
        </div>
    );
}

export default LandingPage;