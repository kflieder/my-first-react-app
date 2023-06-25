import './index.css'


const tableData = [
    { Business: "Ride Service", Name: "Gerardo A. Cordero", Contact: "999-197-0165", address: "N/A" },
    { Business: "Health/Wellness", Name: "Skin & Health Center", Contact: "999-995-7433", address: "Calle 23 numero 70 entre 30 y 32 Fracc Montecarlo Merida Yucatan cp.97130"},
    { Business: "Salon", Name: "CG Studio", Contact: "999-661-9999", address: "Calle 74 249 Local 2-A Plaza Terramericas, Fracc Las Americas, 97302 Merida, Yucatan"},
    { Business: "Home Massaje", Name: "Velkan Lopez", Contact: "999-547-5117", address: "N/A"}
]

function TableToRender() {
    return (
        <div className="theTableDiv">
           
            <table>
                <tr>
                    <th>Business</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
                {tableData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Business}</td>
                            <td>{val.Name}</td>
                            <td>{val.Contact}</td>
                            <td>{val.address}</td>
                        </tr>
                    )

                })}
            </table>
            {/* <div>
                <h1>Websites</h1>
                <ul>
                    <li><a href='https://www.cgstudio.com.mx'>CG Studio</a></li>
                    <li><a href='https://www.velkanlopez.com'>Velkan Lopez</a></li>
                </ul>
            </div> */}
        </div>
    )}





    
    export default TableToRender

