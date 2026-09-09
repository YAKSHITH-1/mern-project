import managementLogo from "../assets/management.png";
import dashboardlogo from '../assets/dashboard.png';
import taskslogo from '../assets/checklist.png';

export function Navbar() {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#5ba8e389", padding: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <img src={managementLogo} alt="Management Logo" style={{ width: "50px", height: "50px" }} />
                    <h4 style={{ color: "black", margin: 0 }}>Student Task Portal</h4>
                </div>
                <div style={{ marginRight: "20px" }}>
                    <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
                        <li style={{ border: "3px solid beige", padding: "2px 8px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "10px" }}>
                            <img src={dashboardlogo} alt="Dashboard Logo" style={{ width: "20px", height: "20px" }} />
                            <a style={{ color: "antiquewhite", fontWeight: "400" }} href="#" >Dashboard</a>
                        </li>
                        <li style={{ border: "3px solid beige", padding: "2px 8px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "10px" }}>
                            <img src={taskslogo} alt="Tasks Logo" style={{ width: "20px", height: "20px" }} />
                            <a style={{ color: "antiquewhite", fontWeight: "400" }} href="#" >Tasks</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


